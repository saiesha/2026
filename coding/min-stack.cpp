class MinStack {
    stack<pair<int, int>> st;
public:
    MinStack() {
        // Initializes the empty stack
    }
    
    void push(int value) {
        if(st.empty())
        st.push({value, value});
        else
        {
            st.push({value, min(value, st.top().second)});
        }

    }
    
    void pop() {
        if(!st.empty())
        {
            st.pop();
        }
    }
    
    int top() {
        if(!st.empty())
        {
            return st.top().first;
        }
        return -1;
    }
    
    int getMin() {
        return st.top().second;
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(value);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */
