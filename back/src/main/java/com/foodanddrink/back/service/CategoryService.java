package com.foodanddrink.back.service;

import com.foodanddrink.back.entity.Category;
import com.foodanddrink.back.repo.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    private CategoryRepository categoryRepository;

    @Autowired
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category> getAllCategories() {
        return this.categoryRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
    }


    public Category addNewCategory(Category category) {
        return categoryRepository.save(category);
    }

    public Category getCategoryById(Long id) {
        return categoryRepository.findById(id).orElse(null);
    }

    public Optional<Category> updateCategory(Long id, Category updatedCategory) {
        return categoryRepository.findById(id).map(existing -> {

            existing.setIcon(updatedCategory.getIcon());
            existing.setNameEN(updatedCategory.getNameEN());
            existing.setNameAR(updatedCategory.getNameAR());
            existing.setDescriptionEN(updatedCategory.getDescriptionEN());
            existing.setDescriptionAR(updatedCategory.getDescriptionAR());

            return categoryRepository.save(existing);
        });
    }

    public boolean deleteCategory(Long id) {
        if (!categoryRepository.existsById(id)) {
            return false;
        }
        categoryRepository.deleteById(id);
        return true;
    }

}
