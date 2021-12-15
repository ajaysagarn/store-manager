package com.ajsa.store.manager.controller.ui.v1;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class ApplicationController {
	@RequestMapping(value = {"/" ,"/{path:^(?!api|swagger|js).*}"}, method = RequestMethod.GET)
    public String home() {
        return "home";
    }
}
