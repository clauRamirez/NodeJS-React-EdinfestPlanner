package com.codeclan.festivalplannerapp.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("festivals")
public class Festival {

    @Id
    private String name;

    private Object jsonEventObject;

    public Festival(String name, Object jsonEventObject) {
        this.name = name;
        this.jsonEventObject = jsonEventObject;
    }

    public Festival() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Object getJsonEventObject() {
        return jsonEventObject;
    }

    public void setJsonEventObject(String jsonEventObject) {
        this.jsonEventObject = jsonEventObject;
    }
}
