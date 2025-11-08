package com.foodanddrink.back.repo;

import com.foodanddrink.back.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {

    List<Item> findByCategoryNameEN(String keyword);
    List<Item> findByCategoryNameAR(String keyword);
    List<Item> findByNameENContaining(String keyword);
    List<Item> findByNameARContaining(String keyword);

}
