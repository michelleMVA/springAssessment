package org.generation.springAssessment.service;

import org.generation.springAssessment.repository.ItemRepository;
import org.generation.springAssessment.repository.entity.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ItemServiceMySQL implements ItemService {

    private final ItemRepository itemRepository;

    public ItemServiceMySQL(@Autowired ItemRepository itemRepository) { this.itemRepository = itemRepository; }

    @Override
    public Item save (Item item) {
        return itemRepository.save(item);
    }

    @Override
    public void delete (int itemID) { itemRepository.deleteById( itemID );}


    @Override
    public List<Item> all() {
        List<Item> result = new ArrayList<>();
        itemRepository.findAll().forEach( result :: add );
        return result;
    }

    @Override
    public Item findById( int itemId ) {
        Optional<Item> item = itemRepository.findById( itemId );
        Item itemResponse = item.get();
        return itemResponse;
    }
}
