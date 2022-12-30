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

    const pop = function() {
        const lastIndex = size() - 1;
        const lastNode = tail();
        at(lastIndex - 1).next = null;
        return lastNode;
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

    return {
        head,
        prepend,
        append,
        pop,
        tail,
        at,
        size,
    };
};

const Node = function(value) {
    const setValue = value || null;
    return {
        value: setValue,
        next: null
    }
};

module.exports = { LinkedList };