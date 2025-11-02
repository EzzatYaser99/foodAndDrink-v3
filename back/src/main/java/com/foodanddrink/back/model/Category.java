package com.foodanddrink.back.model;

import com.foodanddrink.back.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@Entity
@Table(name = "category")
@MappedSuperclass

public class Category extends BaseEntity {

}
