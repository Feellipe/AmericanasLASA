package com.react.spring.lasa.reactspringlasa;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReactSpringController {
    @RequestMapping(value="/echo")
    public String echo(@RequestParam(value="request", defaultValue="Helloworld")String request){
        return request;
    }
}