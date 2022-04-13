package com.example.towerbuilder;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "DataInfo")
public class DataInfoEntity {

        @Id
        @Column(name = "id")
        private String uuid;

        @Column(name = "input")
        private String input;

        @Column(name = "output")
        private String output;



}



