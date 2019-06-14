package kit.personal.ssoclient.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpRequest.BodyPublishers;
import java.net.http.HttpClient.Redirect;
import java.net.http.HttpResponse;
import java.net.http.HttpResponse.BodyHandlers;
import java.net.URI;
import java.nio.charset.StandardCharsets;
import java.time.Duration;

@Controller
public class HomeController{
    @Value("${spring.security.oauth2.client.provider.springssoserver.baseurl}")
    private String ssoserverBaseURL;

    @Autowired
    private OAuth2AuthorizedClientService authorizedClientService;
    private static Logger LOG = LoggerFactory.getLogger(HomeController.class);


    @GetMapping("/")
    @ResponseBody
    public String index() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return auth.getPrincipal().getClass().toGenericString() + "--------" + auth.getPrincipal().toString();
    }

    @GetMapping("/loginPage")
    public String login() {
        return "loginPage";
    }

    @GetMapping("/logoutPage")
    public void revokeToken(OAuth2AuthenticationToken authentication, HttpServletRequest logoutRequest, HttpServletResponse response) {
        OAuth2AuthorizedClient authorizedClient = this.getAuthorizedClient(authentication);
        String ret = "token:" + authorizedClient.getAccessToken().getTokenValue();
        HttpClient client = HttpClient.newBuilder()
            .followRedirects(Redirect.NORMAL)
            .connectTimeout(Duration.ofSeconds(20))
            .build();

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(ssoserverBaseURL + "/user/revoke"))
            .timeout(Duration.ofMinutes(2))
            .header("Authorization", "Bearer " + authorizedClient.getAccessToken().getTokenValue())
            .POST(BodyPublishers.ofString(""))
            .build();
        client.sendAsync(request, BodyHandlers.ofString())
            .thenApply(HttpResponse::body)
            .thenAccept(System.out::println);

        try {
            logoutRequest.logout();
        } catch (ServletException e) {
            e.printStackTrace();
        }

        try {
            String redirectURL = logoutRequest.getScheme() + "://" + logoutRequest.getServerName() + ":" + logoutRequest.getServerPort() + logoutRequest.getContextPath();
            LOG.debug("redirect URL:" + redirectURL);
            LOG.debug("encode redirect URL:" + URLEncoder.encode(redirectURL, StandardCharsets.UTF_8));

            response.sendRedirect(ssoserverBaseURL + "/exit?callbackURL="+ URLEncoder.encode(redirectURL, StandardCharsets.UTF_8));
            return;
        } catch (IOException e){
            e.printStackTrace();
            try{
                response.sendRedirect("/");
            } catch (IOException secondE ){
                secondE.printStackTrace();
            }
            return;
        }
    }

    @GetMapping("/userinfo")
    @ResponseBody
    public String userinfo(OAuth2AuthenticationToken authentication) {

        OAuth2AuthorizedClient authorizedClient = this.getAuthorizedClient(authentication);
        String ret = "token:" + authorizedClient.getAccessToken().getTokenValue();
        ret += ", userName:" + authentication.getName();
        ret += ", clientName:" + authorizedClient.getClientRegistration().getClientName();
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        for (GrantedAuthority authority : auth.getAuthorities()){
            ret += ", authority:" + authority.getAuthority();
        }
        //DefaultOidcUser oidcUser = (DefaultOidcUser) auth.getPrincipal();
        //ret += ", oidcUser" + oidcUser.getFullName();
        return ret;
    }

    @GetMapping("/userias")
    @ResponseBody
    public String userias(OAuth2AuthenticationToken authentication) {
        String ret = "you have role ias";
        return ret;
    }

    @GetMapping("/usergoogle")
    @ResponseBody
    public String usergoogle(OAuth2AuthenticationToken authentication) {
        String ret = "you have role google";
        return ret;
    }

    private OAuth2AuthorizedClient getAuthorizedClient(OAuth2AuthenticationToken authentication) {
        return this.authorizedClientService.loadAuthorizedClient(
                authentication.getAuthorizedClientRegistrationId(), authentication.getName());
    }
}
