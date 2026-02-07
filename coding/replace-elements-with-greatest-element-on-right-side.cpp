class Solution {
public:
    vector<int> replaceElements(vector<int>& arr) {
        int temp = arr[arr.size() - 1];
        arr[arr.size() - 1] = -1;

        for(int i = arr.size()-2; i >= 0; i--)
        {
            int t = arr[i];
            arr[i] = temp;
            if(t > temp)
            temp = t;
        }

        return arr;
    }
};
