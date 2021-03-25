package com.webchat.web.websocket;

import javax.servlet.http.HttpSession;
import javax.websocket.HandshakeResponse;
import javax.websocket.server.HandshakeRequest;
import javax.websocket.server.ServerEndpointConfig;

/**
 *获取当前用户的HttpSession
 */
public class GetHttpSessionConfigurator extends ServerEndpointConfig.Configurator {
    /**
     *
     * @param sec
     * @param request
     * @param response
     */
    @Override
    public void modifyHandshake(ServerEndpointConfig sec, HandshakeRequest request, HandshakeResponse response) {
        //HandshakeRequest request握手时的请求对象，通过这个对象获取当前HttpSession
        HttpSession httpSession = (HttpSession) request.getHttpSession();
        //获取后存储在ServerEndpointConfig中，让Endpoint得到
        sec.getUserProperties().put(HttpSession.class.getName(),httpSession);
    }
}
