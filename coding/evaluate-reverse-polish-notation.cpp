class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        stack<int> operands;
        for(auto token: tokens)
        {
            //if its a operand - insert/push
            //if its a operator - pop the two operands, perform operation and then push the result

            if((token =="+")||(token =="-")||(token =="*")||(token =="/"))
            {
                int op2 = operands.top(); // first operand
                operands.pop();
                int op1 = operands.top(); // second operand
                operands.pop();

                if(token == "+")
                operands.push(op1+op2);
                else if(token == "-")
                operands.push(op1-op2);
                else if(token == "*")
                operands.push(op1*op2);
                else if(token == "/")
                operands.push(op1/op2);
            }
            else
            {
                operands.push(stoi(token));
            }
        }

        return operands.top();
    }
};
