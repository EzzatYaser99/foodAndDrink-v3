package com.foodanddrink.back.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Set;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "category")
@ToString(exclude = "items")
public class Category extends TimestampedEntity {
    @Column(name = "icon")
    private String icon;

    @Column(name = "description_en", length = 1000)
    private String descriptionEN;

    @Column(name = "description_ar", length = 1000)
    private String descriptionAR;

    @JsonIgnore
    @OneToMany(mappedBy = "category")
    private Set<Item> items;
}
