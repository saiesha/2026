class Solution {
public:
    int maxArea(vector<int>& height) {
        int Gmax = 0;

        int l = 0;
        int r = height.size() - 1;

        while(l < r)
        {
            int h = min(height[l], height[r]);
            int w = r-l;
            int currmax = h*w;
            Gmax = max(Gmax, h*w);
            if(height[l] < height[r])
            {
                l++;
            }
            else
            {
                r--;
            }
        }

        return Gmax;
    }
};
