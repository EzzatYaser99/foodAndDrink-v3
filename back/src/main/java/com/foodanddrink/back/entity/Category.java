package com.foodanddrink.back.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@Entity
@Table(name = "category")
public class Category extends TimestampedEntity {
    @Column(name = "icon")
    private String icon;

    @Column(name = "description", length = 1000)
    private String description;

}
