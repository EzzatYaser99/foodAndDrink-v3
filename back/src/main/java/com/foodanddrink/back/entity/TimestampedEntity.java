package com.foodanddrink.back.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@MappedSuperclass
public class TimestampedEntity extends BaseEntity {
    @Column(name = "date_create")
    @CreationTimestamp
    private Date dateCreate;

    @Column(name = "date_update")
    @UpdateTimestamp
    private Date dateUpdate;
}
