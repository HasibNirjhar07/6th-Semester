import org.junit.Test;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import static org.junit.Assert.*;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class OrderServiceTest {

    private OrderService orderService = new OrderService();

    @Test
    public void test_1_validateCart() {
        System.out.println("Executing Test 1: validateCart");

        List<String> cartWithItems = Arrays.asList("Item1", "Item2", "Item3");
        assertTrue("Cart with items should be valid",
                orderService.validateCart(cartWithItems));

        System.out.println("Cart validation tests completed\n");
    }

    @Test
    public void test_2_applyDiscount() {
        System.out.println("Executing Test 2: applyDiscount");

        double total = 100.0;
        double discount = 10.0;
        double expected = 90.0;
        double actual = orderService.applyDiscount(total, discount);
        assertEquals("10% discount on $100 should result in $90",
                expected, actual, 0.01);

    }

    @Test
    public void test_3_calculateTotalAfterDiscount() {
        System.out.println("Executing Test 3: calculateTotalAfterDiscount");

        List<Double> itemPrices = Arrays.asList(25.99, 15.50, 8.75, 12.25);

        double calculatedTotal = orderService.calculateTotal(itemPrices);
        double expectedTotal = 62.49;
        assertEquals("Total calculation should be correct",
                expectedTotal, calculatedTotal, 0.01);
    }



}



