package com.ajsa.store.manager.util;

import org.apache.catalina.Store;

public class StoreResponse {
    private int code;
    private Object response;

    public StoreResponse(){

    }

    public StoreResponse(int code, Object response) {
        this.code = code;
        this.response = response;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public Object getResponse() {
        return response;
    }

    public void setResponse(Object response) {
        this.response = response;
    }
}
