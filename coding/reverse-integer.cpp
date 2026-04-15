class Solution {
public:
    int reverse(int x) {
        long long y = 0;

        while(x)
        {
            int digit = x % 10;

            // Correct overflow check
            if (y > INT_MAX / 10 || (y == INT_MAX / 10 && digit > 7))
                return 0;

            if (y < INT_MIN / 10 || (y == INT_MIN / 10 && digit < -8))
                return 0;

            y = y * 10 + digit;
            x /= 10;
        }

        return y;
    }
};
