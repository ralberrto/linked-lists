const LinkedList = function() {
    let _head = null;

    const head = function () {
        return _head;
    };

    const prepend = function(value) {
        const node = Node(value);
        node.next = _head;
        _head = node;
        return node;
    }

    const append = function(value) {
        const node = Node(value);
        if (!_head) {
            _head = node;
            return node;
        }
        tail().next = node;
        return node;
    };

    const insertAt = function(value, index) {
        const preceding = at(index - 1);
        const succeeding = at(index);
        const node = Node(value);
        preceding.next = node;
        node.next = succeeding;
        return node;
    };

    const pop = function() {
        const lastIndex = size() - 1;
        const lastNode = tail();
        at(lastIndex - 1).next = null;
        return lastNode;
    };

    const removeAt = function(index) {
        const preceding = at(index - 1);
        const succeeding = at(index + 1);
        preceding.next = succeeding;
    };

    const tail = function() {
        if (!_head) return _head;
        let node = _head;
        while (node.next) {
            node = node.next;
        }
        return node;
    };

    const at = function(index) {
        if (index === 0) return head();
        return at(index - 1).next;
    };

    const contains = function(value) {
        let node = head();
        let found = false;
        while (node) {
            if (node.value === value) {
                found = true;
                break;
            };
            node = node.next;
        } 
        return found;
    };

    const find = function(value) {
        let node = head();
        let count = 0;
        while (node) {
            if (node.value === value) {
                return count;
            }
            count++;
            node = node.next;
        }
        return null;
    };

    const size = function() {
        if (!_head) return 0;
        let node = _head;
        let count = 1;
        while (node.next) {
            node = node.next;
            count++;
        }
        return count;
    }

    const toString = function() {
        let node = head();
        let listStringed = '';
        while (node) {
            listStringed += `( ${node.value} ) -> `
            node = node.next;
        }
        listStringed += 'null';
        return listStringed;
    };

    return {
        head,
        prepend,
        append,
        insertAt,
        pop,
        removeAt,
        tail,
        at,
        contains,
        find,
        size,
        toString,
    };
};

const Node = function(value) {
    const setValue = value || null;
    return {
        value: setValue,
        next: null
    }
};

module.exports = LinkedList;