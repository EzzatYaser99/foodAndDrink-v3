package com.foodanddrink.back.controller;

import com.foodanddrink.back.entity.ApiResponse;
import com.foodanddrink.back.entity.Category;
import com.foodanddrink.back.service.CategoryService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@Tag(name = "categories", description = "Operations related to categories")
public class CategoryController {

    private CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping()
    @Operation(summary = "Get All Categories", description = "Retrieve All Categories")
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

    @GetMapping("/{id}")
    @Operation(summary = "Get Category", description = "Retrieve a category by ID")
    public ResponseEntity<ApiResponse<Category>> getCategoryById(@PathVariable Long id) {
        try {
            Category category = categoryService.getCategoryById(id);

            if (category == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(new ApiResponse<>("Category not found", null, 404));
            }

            return ResponseEntity.ok(
                    new ApiResponse<>("Category retrieved successfully", category, 200));

        } catch (Exception e) {
            return ResponseEntity.internalServerError()
                    .body(new ApiResponse<>("Error fetching category: " + e.getMessage(), null, 500));
        }
    }

    @PostMapping
    @Operation(summary = "Add Category", description = "Create a new category")
    public ResponseEntity<ApiResponse<Category>> addNewCategory(@RequestBody Category category) {
        try {
            Category saved = categoryService.addNewCategory(category);
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(new ApiResponse<>("Category created successfully", saved, 201));
        } catch (Exception e) {
            return ResponseEntity.internalServerError()
                    .body(new ApiResponse<>("Error creating category: " + e.getMessage(), null, 500));
        }
    }
    @PutMapping("/{id}")
    @Operation(summary = "Update Category")
    public ResponseEntity<ApiResponse<Category>> updateCategory(
            @PathVariable Long id,
            @RequestBody Category categoryRequest) {

        return categoryService.updateCategory(id, categoryRequest)
                .map(updated -> ResponseEntity.ok(
                        new ApiResponse<>("Category updated successfully", updated, 200)))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(new ApiResponse<>("Category not found", null, 404)));
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete Category", description = "Delete category by ID")
    public ResponseEntity<ApiResponse<Void>> deleteCategory(@PathVariable Long id) {
        try {
            boolean deleted = categoryService.deleteCategory(id);

            if (!deleted) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(new ApiResponse<>("Category not found", null, 404));
            }

            return ResponseEntity.ok(new ApiResponse<>("Category deleted successfully", null, 200));

        } catch (Exception e) {
            return ResponseEntity.internalServerError()
                    .body(new ApiResponse<>("Error deleting category: " + e.getMessage(), null, 500));
        }
    }

}
