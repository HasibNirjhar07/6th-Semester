import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

import org.junit.Test;

public class ValueCheckerTest {

    @Test
    public void testCombination_5_2() throws Exception {
        assertEquals(10, CombinationCalculator.combination(5, 2));
    }

    @Test
    public void testCombination_12_10() throws Exception {
        assertEquals(66, CombinationCalculator.combination(12, 10));
    }

    @Test
    public void testCombination_6_6() throws Exception {
        assertEquals(1, CombinationCalculator.combination(6, 6));
    }

    @Test
    public void testCombination_15_2() throws Exception {
        assertEquals(105, CombinationCalculator.combination(15, 2));
    }

    @Test
    public void testCombination_15_14() throws Exception {
        assertEquals(15, CombinationCalculator.combination(15, 14));
    }

    @Test
    public void testCombination_3_0() throws Exception {
        assertEquals(1, CombinationCalculator.combination(3, 0));
    }

    @Test
    public void testCombination_non_integer() {
        try {
            CombinationCalculator.nonIntegerInput(2, 1.5);
            fail("Expected Exception not thrown for non-integer input");
        } catch (Exception e) {
            assertEquals("Invalid input: n and r must be integers in range 1..15, and r <= n", e.getMessage());
        }
    }

    @Test
    public void testCombination_zero_n() {
        try {
            CombinationCalculator.combination(0, 0);
            fail("Expected Exception not thrown for n=0");
        } catch (Exception e) {
            assertEquals("Invalid input: n and r must be integers in range 1..15, and r <= n", e.getMessage());
        }
    }

    @Test
    public void testCombination_negative_input() {
        try {
            CombinationCalculator.combination(-14, 2);
            fail("Expected Exception not thrown for negative n");
        } catch (Exception e) {
            assertEquals("Invalid input: n and r must be integers in range 1..15, and r <= n", e.getMessage());
        }

        try {
            CombinationCalculator.combination(5, -2);
            fail("Expected Exception not thrown for negative r");
        } catch (Exception e) {
            assertEquals("Invalid input: n and r must be integers in range 1..15, and r <= n", e.getMessage());
        }
    }

    @Test
    public void testCombination_too_large_input() {
        try {
            CombinationCalculator.combination(1000, 2);
            fail("Expected Exception not thrown for too large n");
        } catch (Exception e) {
            assertEquals("Invalid input: n and r must be integers in range 1..15, and r <= n", e.getMessage());
        }

        try {
            CombinationCalculator.combination(10, 1000);
            fail("Expected Exception not thrown for too large r");
        } catch (Exception e) {
            assertEquals("Invalid input: n and r must be integers in range 1..15, and r <= n", e.getMessage());
        }
    }
}

