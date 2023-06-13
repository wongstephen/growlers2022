import React from "react";

const faqs = [
  {
    question: "Do I need to register my dog to visit the play park?",
    content: `Yes, we kindly ask all dog owners to register their pets in our online portal before visiting the play park. It helps us ensure a smooth entry process and maintain a safe environment for all.`,
  },
  {
    question: "How can I register my dog online?",
    content: `Registering your dog is quick and easy! Simply visit our online portal [<a href="https://growlerz.gingrapp.com/front_end/new_customer" target="_blank" rel="noreferrer">link</a>] and follow the step-by-step instructions to provide the necessary information and upload your dog's vaccination records.`,
  },
  {
    question: "Are Dog Vaccinations Required?",
    content: `Proof of current DHPP, Rabies, and Bordetella vaccinations is required prior to admission. While Bordetella vaccination does not fully eliminate the chance of getting kennel cough, it does help bolster their immunity to it. All guests are responsible for ensuring that their records are up to date. For your convenience please create a profile
        <a
          href="https://growlerz.gingrapp.com/front_end/new_customer"
          class="font-bold text-teal-500"
          target="_blank"
          rel="noreferrer"
          aria-label="Submit vaccinations"

        >
          here
        </a>
      and upload your vaccination records.`,
  },
  {
    question: "How can I submit vaccination records?",
    content: `For your convenience, you can email them before you come to Growlerz! We will review them and send you a confirmation that your dog is approved for entry. This saves us form having to turn you away at the door if something isn’t correct or the vaccinations are incomplete. For the health of everyone’s dogs, we are very strict on the vaccination records. For expediated entry, please create a profile and upload records 
    <a
      href="https://growlerz.gingrapp.com/front_end/new_customer"
      class="font-bold text-teal-500"
      target="_blank"
      rel="noreferrer"
      aria-label="Submit vaccinations"

    >
      here
    </a>`,
  },
  {
    question: "What about spaying and neutering?",
    content: "ALL dogs over 7 months of age must be spayed/neutered.",
  },
  {
    question: "Do you serve food?",
    content:
      "No, we do not have a kitchen or serve food at Growlerz. However, you are welcome to bring in your own food. There are some great restaurants in the neighborhood, and we occasionally have food trucks come by to serve our customers.",
  },
  {
    question: "Who watches my dog in the play park?",
    content:
      "As a pet owner, it's your responsibility to make sure your dog behaves well and that you clean up after them at the park. While park staff may be able to help in some situations, they are not responsible for your dog's behavior or for cleaning up after them. If your dog shows signs of aggression or starts to escalate, you may be asked to take a break or leave the park. It's crucial to always watch your dog carefully while at the park and to take action if needed to ensure a safe and enjoyable experience for everyone.",
  },
  {
    question: "Do I need a dog for entry?",
    content:
      "Growlerz is a great place for guests to exercise their dogs, and you are welcome to come in and watch the dogs play, too. If you're feeling thirsty, you can grab a beer at the park and enjoy it while you watch the pups. We also offer growler fills to go, so you can take some of your favorite beer with you when you leave. Just remember to drink responsibly and always supervise your dog while at the park.",
  },
  {
    question: "Do you allow puppies?",
    content:
      "YES! As long as they are at least 4 months and have the required vaccinations submitted.",
  },
  {
    question: "Do you allow kids?",
    content:
      "We are a 21 and older business and do not allow anyone under the age of 21, including babies. This is in accordance with state law.",
  },
  {
    question: "Do I need a dog for entry?",
    content:
      "Growlerz is a great place for guests to exercise their dogs, and you are welcome to come in and watch the dogs play, too. If you're feeling thirsty, you can grab a beer at the park and enjoy it while you watch the pups. We also offer growler fills to go, so you can take some of your favorite beer with you when you leave. Just remember to drink responsibly and always supervise your dog while at the park.",
  },
  {
    question: "Do you offer private rentals?",
    content:
      "Yes, we do! Our facility can be rented in its entirety or in designated sections for special events. If you're interested in booking a private rental, please send us an email through our contact page for more information.",
  },
  {
    question: "How do I access the Gingr App?",
    content:
      "To access the Gingr App, download it on iOS or Android, then enter the code 643286.",
  },
];
export const Faq = () => {
  return (
    <>
      {/* FAQ */}
      <section
        id="faq"
        className="max-w-5xl py-24 mx-auto bg-transparent md:pt-32"
      >
        <div className="container px-4 mx-auto">
          <div className="text-left">
            <span className="inline-block mb-4 text-base text-teal-500 uppercase font-semibold tracking-[.2rem]">
              FAQ
            </span>
            <h3 className="mb-6 text-3xl font-bold leading-snug tracking-tight text-gray-900 md:text-5xl lg:text-7xl md:leading-snug lg:leading-snug">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="flex flex-wrap max-w-4xl pt-12 -mx-4">
            {faqs.map((faq, idx) => {
              return (
                <div className="w-full px-4 mb-4 md:w-1/2" key={idx}>
                  <div className="h-full group">
                    <div className="relative h-full px-8 pt-16 pb-8 transition duration-200 bg-white rounded-md shadow:sm hover:shadow-md">
                      <div className="absolute top-0 inline-flex items-center justify-center w-16 h-16 transition duration-200 transform -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 bg-trasnparent"></div>
                      <h3 className="max-w-xs mb-4 text-xl font-bold leading-7 text-gray-900">
                        {faq.question}
                      </h3>
                      <p
                        className="font-medium text-gray-600 transition duration-200 group-hover:text-gray-700"
                        dangerouslySetInnerHTML={{ __html: faq.content }}
                      ></p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
