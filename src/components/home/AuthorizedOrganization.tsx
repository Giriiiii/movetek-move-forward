const organizations = [
  {
    name: "Arab Line Trading & Contracting",
    location: "Doha, Qatar",
    description: "We are a Doha-based trading, contracting, and manpower supply company providing reliable and cost-effective solutions across various industries in Qatar. Our services include the supply of skilled and unskilled manpower, general trading of construction and industrial materials, and execution of contracting works with a strong focus on quality, safety, and timely delivery. Backed by experienced management and a customer-centric approach, we support our clients in achieving operational efficiency while maintaining compliance with local regulations and industry standards."
  },
  {
    name: "Arab Line Shipping & Logistics",
    location: "Doha, Qatar"
  },
  {
    name: "MoveTek Used Cars Trading",
    location: "UAE"
  },
  {
    name: "MoveTek Shipping & Logistics Pvt. Ltd",
    location: "India"
  },
  {
    name: "MoveTek Shipping & Logistics FZE",
    location: "UAE"
  },
  {
    name: "AVERE Builders and Engineering Contractors",
    description: "We are a trusted construction company delivering high-quality residential, commercial, and infrastructure projects. With a strong focus on safety, precision, and timely delivery, we combine skilled craftsmanship with modern construction techniques to build structures that last."
  },
  {
    name: "Craftwise Construction Solutions",
    address: "MRA 103, TKD Road, Muttada P.O., TVM 695025",
    description: "We are a creative interior design company specializing in residential and commercial spaces. Our team combines functionality, aesthetics, and innovation to design interiors that reflect your style while enhancing comfort and efficiency."
  },
  {
    name: "Matbakh Al Laila Multi Cuisine Restaurant",
    description: "A destination for food lovers, our multicuisine restaurant brings together a rich variety of flavors from around the world. From traditional favorites to modern specialties, every dish is prepared with quality ingredients and authentic taste."
  },
  {
    name: "Al Laila Caterings",
    address: "Plamoodu, Pattom, TVM 695004",
    description: "We provide high-quality catering services for weddings, corporate events, parties, and special occasions. Our team delivers delicious food, timely service, and flawless presentation to make every event memorable."
  }
];

const AuthorizedOrganization = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Our Authorized Organizations
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizations.map((org, index) => (
            <div 
              key={index}
              className="bg-background rounded-xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-semibold text-foreground text-lg mb-2">
                {org.name}
              </h3>
              {org.location && (
                <p className="text-sm text-primary font-medium mb-2">
                  {org.location}
                </p>
              )}
              {org.address && (
                <p className="text-xs text-muted-foreground mb-3">
                  📍 {org.address}
                </p>
              )}
              {org.description && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {org.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorizedOrganization;
