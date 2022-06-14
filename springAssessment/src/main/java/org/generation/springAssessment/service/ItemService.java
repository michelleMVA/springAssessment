package org.generation.springAssessment.service;

import org.generation.springAssessment.repository.entity.Item;

import java.util.List;

public interface ItemService {

    Item save(Item item);

    void delete(int itemId);

    List<Item> all();

    Item findById(int itemId);
}

