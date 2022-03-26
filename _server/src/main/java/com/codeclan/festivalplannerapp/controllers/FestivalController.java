package com.codeclan.festivalplannerapp.controllers;

import com.codeclan.festivalplannerapp.helpers.HmacSha1Signature;
import com.codeclan.festivalplannerapp.models.Festival;
import com.codeclan.festivalplannerapp.repositories.FestivalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class FestivalController {
    @Autowired
    FestivalRepository festivalRepository;

    @Value("${keys.SECRET_KEY}")
    private String secretKey;

    @Value("${keys.API_KEY}")
    private String apiKey;

    @GetMapping("/festivals")
    public ResponseEntity<Object> jazz(@RequestParam(value = "id", required = false) String id) throws Exception {
//      handle logic here to check if date older than certain time i.e. 12h/24h
        Festival found = festivalRepository.findById(id).orElse(null);
        if (found != null ){
            return new ResponseEntity<>(found.getJsonEventObject(), HttpStatus.OK);
        }

        String url = HmacSha1Signature.getSignedData(apiKey, secretKey, "festival=" + id);

//      RestTemplate is deprecated. Refactored to a more modern approach
        RestTemplate restTemplate = new RestTemplate();
        Object[] response = restTemplate.getForObject(url, Object[].class);

        Festival newFestival = new Festival(id, response);
        festivalRepository.save(newFestival);

        return new ResponseEntity<>(newFestival.getJsonEventObject(), HttpStatus.OK);
    }
}
