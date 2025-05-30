import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;

import static org.junit.Assert.assertEquals;

@RunWith(Parameterized.class)
public class OrderServiceTest2 {

    private double total;
    private double discount;

    private double expectedResult;

    private OrderService orderService;


    @Before
    public void setUp(){
        orderService = new OrderService();


    }

    public OrderServiceTest2(double total, double discount , double expectedResult) {
        this.total = total;
        this.discount = discount;
        this.expectedResult = expectedResult;

    }

    @Parameterized.Parameters

    public static Object[][] data() {
        return new Object[][] {
            { 100.0, 10.0, 90.0 },
            { 200.0, 20.0, 160.0 },
            { 50.0, 5.0, 47.5 },
            { 75.0, 15.0, 63.75 },
            { 150.0, 25.0, 112.5 },

                {150,100, 0.0 }, // Edge case: discount equals total
        };



    }

    @Test
    public void testApplyDiscount() {
        System.out.println("Executing Parameterized Test: applyDiscount");
        double actualResult = orderService.applyDiscount(total, discount);
        assertEquals("Applying discount should yield correct result",
                expectedResult, actualResult, 0.01);
    }









}

