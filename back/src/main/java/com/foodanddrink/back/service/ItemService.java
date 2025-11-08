package com.foodanddrink.back.service;

import com.foodanddrink.back.entity.Item;
import com.foodanddrink.back.repo.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemService {

    private ItemRepository itemRepository;

    @Autowired
    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public List<Item> getAllItems() {
        return this.itemRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
    }

    public List<Item> getItemsByCategoryName(String keyword) {
        List<Item> itemsEn = this.itemRepository.findByCategoryNameEN(keyword);
        List<Item> itemsAr = this.itemRepository.findByCategoryNameAR(keyword);
        itemsEn.addAll(itemsAr);
        return itemsEn;
    }

public List<Item> getItemsByName(String keyword) {
        List<Item> itemsEn = this.itemRepository.findByNameENContaining(keyword);
        List<Item> itemsAr = this.itemRepository.findByNameARContaining(keyword);
        itemsEn.addAll(itemsAr);
        return itemsEn;
    }

    public Optional<Item> getItem(Long id) {
        return this.itemRepository.findById(id);
    }
}
