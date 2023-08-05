// Generate Customer portal
export async function generateCustomerPortalLink(customerId: string) {
    try {
        
        const portalSession = await stripe.billingPortal.sessions.create({
            customer: customerId,
            return_url: process.env.NEXTAUTH_URL + "/dashboard/settings/billing", 
        });

        console.log()

        return portalSession.url;
    } catch (error) {
        console.log(error)
        return undefined;
    }
}

//Component for your page
export const StripePricingTable = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/pricing-table.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };

  }, []);

  return React.createElement("stripe-pricing-table", {
    "pricing-table-id": "<PRICING TABLE ID>",
    "publishable-key":
      "<STRIPE PUBLI KEY>",
  });

};
