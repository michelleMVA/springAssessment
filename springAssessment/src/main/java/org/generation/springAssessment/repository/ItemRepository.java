package org.generation.springAssessment.repository;

import org.generation.springAssessment.repository.entity.Item;
import org.springframework.data.repository.CrudRepository;

public interface ItemRepository extends CrudRepository<Item, Integer>
{
}

