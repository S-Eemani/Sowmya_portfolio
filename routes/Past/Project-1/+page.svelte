<script>
  let imagePath = "../images/Self pic.png";
</script>

<main id="main" class="mt-4">
  <div class="main-content paddsection">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-md-offset-2">
          <div class="row">
            <div class="container-main single-main">
              <div class="col-md-12">
                <div class="block-main mb-30 d-flex flex-column align-items-center">
                  <img src={imagePath} class="img-responsive border rounded-lg mb-4" style="height: 600px; width: auto; left: 50%; max-width: 100%; border: 2px solid #000;" alt="SVM Based Classifier for Detection of DDoS in IoT">

                  <div class="content-main single-post padDiv text-center">
                    <div class="journal-txt">
                      <h2 style="font-size: 24px; font-weight: bold; color: rgb(167, 139, 250); --tw-text-opacity: 1;">SVM Based Classifier for Detection of DDoS in IoT (Research)</h2>
                    </div>

                    <p class="mb-30 text-center">The research scope of Distributed Denial of Service (DDoS) cyber-attacks are expansive as DDoS attacks are simple to implement and often result in huge service disruptions. Despite the implementation of several standard defense mechanisms, the attackers still manage to bring the system down. The impact of a DDoS attack on the Internet of Things (IoT) is more severe due to its resource-constraint nature. Existing DDoS attacks are designed to concentrate on exploiting one resource. However, the combination of multiple attacks will have the ability to exploit multiple resources, hence doing more damage to the resources, especially to the CPU computation power.</p>

                    <p class="mb-30 text-center">In this research, Dr. Ganesh Reddy Karri and I have created a new attack by combining two attacks. For this, a client-server model is designed in the Cooja IoT simulator. Cooja running on the Contiki operating system allows developers to run and test their code before implementing them on actual hardware devices. The network communications are implemented using the ICMPv6 protocol. The simulation consists of both Malicious nodes and Non-Malicious nodes hence creating a variation in the dataset (mimicking the real world scenarios). </p>

                    <p class="mb-30 text-center">We utilized Python's SVM function to train the data and then use the SVM model to predict the test data. To create a categorization chart, we utilized three characteristic values. We have tested the data will all four (linear, RBF, Sigmoid, and poly) SVM kernels and have concluded that the "poly" kernel gives the highest accuracy score. We have further tested out the model with IoT-23-Dataset and have come to the same result. This research is currently under review for publication.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
