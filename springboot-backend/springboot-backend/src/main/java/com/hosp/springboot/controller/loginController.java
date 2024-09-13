package com.hosp.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.hosp.springboot.model.Hosp;

import com.hosp.springboot.repository.loginRepo;



@RestController
@CrossOrigin
@RequestMapping("/api/v1/")
public class loginController {

    @Autowired
    loginRepo login;

   
    @PostMapping(value = "/signup", consumes = "application/json")
    public boolean signup(@RequestBody Hosp d) {

        List<Integer> count = login.emailExists(d.getEmail());
        if (count.get(0) == 0) {

            login.save(d);
            return true;
        } else
            return false;

    }

    @GetMapping(value = "/login")
    public boolean login(@RequestParam String email, @RequestParam String password) {

        List<Integer> count = login.emailExists(email);
        String orgPassword = login.passwordExists(email);

        if (count.get(0) == 1) {
            if (orgPassword.equals(password)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }

    }

}