package com.foodanddrink.back.controller;

import com.foodanddrink.back.entity.ApiResponse;
import com.foodanddrink.back.entity.Item;
import com.foodanddrink.back.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/")
public class ItemController {

    private ItemService itemService;

    @Autowired
    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @GetMapping("allItems")
    public ResponseEntity<ApiResponse<List<Item>>> getAllItems() {
        try {
            List<Item> items = this.itemService.getAllItems();
            if (items.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NO_CONTENT).body(new ApiResponse<>("No Items Found", null, 204));
            }
            return ResponseEntity.ok(new ApiResponse<>("Items retrieved successfully", items, 200));
        } catch (Exception e) {
            return ResponseEntity.internalServerError()
                    .body(new ApiResponse<>("Error fetching items: " + e.getMessage(), null, 500));
        }
    }

    @GetMapping("category")
    public ResponseEntity<ApiResponse<List<Item>>> getItemsByCategoryName(@RequestParam("keyword") String keyword) {
        try {
            List<Item> items = this.itemService.getItemsByCategoryName(keyword);
            if (items.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NO_CONTENT).body(new ApiResponse<>("No Items Found", null, 204));
            }
            return ResponseEntity.ok(new ApiResponse<>("Items retrieved successfully", items, 200));
        } catch (Exception e) {
            return ResponseEntity.internalServerError()
                    .body(new ApiResponse<>("Error fetching items: " + e.getMessage(), null, 500));
        }
    }
    @GetMapping("item")
    public ResponseEntity<ApiResponse<List<Item>>> getItemsByName(@RequestParam("keyword") String keyword) {
        try {
            List<Item> items = this.itemService.getItemsByName(keyword);
            if (items.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NO_CONTENT).body(new ApiResponse<>("No Items Found", null, 204));
            }
            return ResponseEntity.ok(new ApiResponse<>("Items retrieved successfully", items, 200));
        } catch (Exception e) {
            return ResponseEntity.internalServerError()
                    .body(new ApiResponse<>("Error fetching items: " + e.getMessage(), null, 500));
        }
    }

    @GetMapping("item/{id}")
    public ResponseEntity<ApiResponse<Item>> getItemById(@PathVariable("id") Long id) {
        try {
            Optional<Item> selectedItem = this.itemService.getItem(id);
            if (selectedItem.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NO_CONTENT).body(new ApiResponse<>("No Items Found", null, 204));
            }
                return ResponseEntity.ok(new ApiResponse<>("Items retrieved successfully", selectedItem.get(), 200));

        } catch (Exception e) {
            return ResponseEntity.internalServerError()
                    .body(new ApiResponse<>("Error fetching items: " + e.getMessage(), null, 500));
        }
    }

}
