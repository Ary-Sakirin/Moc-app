import Image from "next/image";
export default function AboutSectionOne() {
    return (
        <>
            <section className="py-5 bg-light" id="scroll-target">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6">
                            <Image className="img-fluid rounded mb-5 mb-lg-0" src={"/getStart.png"} alt={""} width={600} height={400} />
                        </div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">Our founding</h2>
                            <p className="lead fw-normal text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}