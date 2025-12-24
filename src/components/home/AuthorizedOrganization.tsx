import arabLineLogo from '@/assets/arab-line-logo.png';

const AuthorizedOrganization = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Our Authorized Organization
          </h2>
          <div className="flex justify-center">
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-shadow duration-300">
              <img 
                src={arabLineLogo} 
                alt="Arab Line - Authorized Organization" 
                className="h-32 md:h-40 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorizedOrganization;
