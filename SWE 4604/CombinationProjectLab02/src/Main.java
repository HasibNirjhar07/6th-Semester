public class Main {

    public static void main(String[] args) {
        try {
            int n = 10;
            int r = 3;
            int result = combination(n, r);
            System.out.println("C(" + n + ", " + r + ") = " + result);
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    public static int combination(int n, int r) throws Exception {
        if (n < 0 || n > 15 || r < 0 || r > 15) {
            throw new Exception("Inputs must be between 0 and 15 inclusive.");
        }
        if (r > n) {
            throw new Exception("r cannot be greater than n.");
        }

        return factorial(n) / (factorial(r) * factorial(n - r));
    }

    public static int factorial(int num) {
        int fact = 1;
        for (int i = 2; i <= num; i++) {
            fact *= i;
        }
        return fact;
    }
}
