package com.foodanddrink.back.controller;

import com.foodanddrink.back.entity.ApiResponse;
import com.foodanddrink.back.entity.Category;
import com.foodanddrink.back.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/")
public class CategoryController {

    private CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping("allCategories")
    public ResponseEntity<ApiResponse<List<Category>>> getAllCategories() {
        try {
            List<Category> categories = this.categoryService.getAllCategories();

            if (categories.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NO_CONTENT).body(new ApiResponse<>("No categories found", null, 204));
            }
            return ResponseEntity.ok(new ApiResponse<>("Categories retrieved successfully", categories, 200));
        } catch (Exception e) {
            return ResponseEntity.internalServerError()
                    .body(new ApiResponse<>("Error fetching categories: " + e.getMessage(), null, 500));
        }
    }
}
