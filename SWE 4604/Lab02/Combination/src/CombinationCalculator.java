public class CombinationCalculator {

    public static long combination(int n, int r) throws Exception {
        if (n < 1 || r < 0 || n > 15 || r > 15 || r > n) {
            throw new Exception("Invalid input: n and r must be integers in range 1..15, and r <= n");
        }
        return factorial(n) / (factorial(r) * factorial(n - r));
    }

    private static long factorial(int num) {
        long result = 1;
        for (int i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }

    public static long nonIntegerInput(double n, double r) throws Exception {
        if (n < 1 || r < 0 || n > 15 || r > 15 || r > n) {
            throw new Exception("Invalid input: n and r must be integers in range 1..15, and r <= n");
        }
        return factorial((int) n) / (factorial((int) r) * factorial((int) (n - r)));
    }
}
