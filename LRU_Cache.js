`LRU Interview Question

Create a data structure that implements the requirements of a Least Recently Used (LRU) cache with O(1) average time complexity.

Initialize an object with a maxium capacity of elements.
getItem Return the value of the key. Update cache with the most recently used key.
putItem Create or update a key value pair in the cache. Evict the least recently used key if the size of keys exceeds the max capacity.`


class LRU {
    
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }
    
    
    
    
    getItem(key) {

        const item = this.cache.get(key);

        if (item) {
            this.cache.delete(key);
            this.cache.set(key, item);
        }

        return item;
    }

    putItem(key, value) {
        
    }
}

    