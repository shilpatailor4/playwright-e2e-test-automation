class test{
    public static void main(String[] arags){
        WebDriver driver = new ChromeDriver();
        driver.get("http://google.com/");

        WebElement links = driver.findElements(By.tagName("a"));

        for(WebElement link : links){
            System.out.println(link.getText() + " " + link.getAttribute("href"));
        }
    }
}