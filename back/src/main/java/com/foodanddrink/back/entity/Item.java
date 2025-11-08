package com.foodanddrink.back.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "item")
@ToString(exclude = "category")

public class Item extends TimestampedEntity {
    @Column(name = "price")
    private float price;

    @Column(name = "image")
    private String image;


    @Column(name = "description_en", length = 2000)
    private String descriptionEN;

    @Column(name = "description_ar", length = 2000)
    private String descriptionAR;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

}
