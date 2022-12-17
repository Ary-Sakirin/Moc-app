import Image from "next/image";

export default function Testimonial() {
    return (
        <>
            <div className="py-5 bg-light">
                <div className="container px-5 my-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-10 col-xl-7">
                            <div className="text-center">
                                <div className="fs-4 mb-4 fst-italic">"Working with Start Bootstrap templates has saved me tons of development time when building new projects! Starting with a Bootstrap template just makes things easier!"</div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <Image src={"/40x40.png"} alt={""} width={40} height={40} className="rounded-circle me-3" />
                                        <div className="fw-bold">
                                            Tom Ato
                                            <span className="fw-bold text-primary mx-1">/</span>
                                            CEO, Pomodoro
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}