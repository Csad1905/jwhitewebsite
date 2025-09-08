import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Burst Pipes",
      description: "Burst pipes are a common plumbing issue, especially during colder months. I offer prompt repair services to minimize damage to your property.",
      image: "/burstpipe.png",
      imageFirst: true
    },
    {
      title: "Boiler Fittings + Replacement",
      description: "Boiler fittings and replacement encompass the installation, repair, or upgrade of components in a heating system. I offer fittings and replacements of new boilers.",
      image: "/boiler fitting.png",
      imageFirst: false
    },
    {
      title: "Central Heating Installation",
      description: "Central heating installation involves setting up or upgrading components in a central heating system such as radiators or thermostats.",
      image: "/centralheating.jpg",
      imageFirst: true
    },
    {
      title: "Power Flushing",
      description: "Power flushing is a cleaning process used to remove sludge, rust, debris, and other contaminants from the central heating system's pipes, radiators, and boiler. Over time, these substances can accumulate within the system, reducing its efficiency, impairing heat distribution, and potentially leading to premature failure of components.",
      image: "/powerflush.jpg",
      imageFirst: false
    },
    {
      title: "Boiler Servicing",
      description: "Boiler servicing is a preventative maintenance procedure performed by qualified technicians to ensure the safe, efficient, and reliable operation of a boiler. Regular servicing helps identify and address potential issues before they escalate into costly repairs or pose safety hazards.",
      image: "/wrench.png",
      imageFirst: true
    },
    {
      title: "General Plumbing",
      description: "General plumbing services are essential for ensuring the proper functioning, safety, and efficiency of plumbing systems in residential, commercial, and industrial buildings. Plumbers play a vital role in maintaining the comfort, convenience, and health of occupants by providing reliable plumbing solutions and expertise.",
      image: "/genplumb.jpg",
      imageFirst: false
    },
    {
      title: "Landlord Certificates",
      description: "Landlord certificates, also known as gas safety certificates, are legal requirements ensuring that gas appliances in rental properties are safe for tenants.",
      image: "/landcert.png",
      imageFirst: true
    },
    {
      title: "Bathroom Installations",
      description: "Bathroom installation requires careful planning, skilled craftsmanship, and attention to detail to create a functional, stylish, and comfortable space that meets the needs and preferences of the homeowner.",
      image: "/bathroom.jpg",
      imageFirst: false
    }
  ];

  return (
    <section id="services">
      <h2 id="servicestitle">Below are the plumbing services I provide:</h2>
      <div id="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            {service.imageFirst ? (
              <>
                <img src={service.image} alt={service.title} />
                <div className="service-text">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </>
            ) : (
              <>
                <div className="service-text">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <img src={service.image} alt={service.title} />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;