import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CourseDetailComponent } from '../course-detail/course-detail.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showMore = false;
  courses = [
    {
      title: 'DOCTOR OF MEDICINE (MBBS/MD)',
      img: '../../assets/head/course1/IMG-20220713-WA0014.jpg',
      description:
        'A doctor of medicine, also known as an M.D., graduates from a traditional medical school. A major difference between D.O.s and M.D.s is that some doctors of osteopathic medicine use manual medicine as part of treatment. In commonwealth countries, such as Great Britain and India, students who want to study medicine and become a doctor earn their MBBS degree, which stands for Bachelor of Medicine, Bachelor of Science. MBBS is a professional undergraduate degree that students can begin after finishing their secondary education.',
    },
    {
      title: 'FORENSIC',
      img: '../../assets/head/course2/national-cancer-institute-XknuBmnjbKg-unsplash.jpg',
      description:
        "Forensic medicine is the application of scientific knowledge for crime-related investigations. Also known as criminalistics, the course is a multidisciplinary subject and is well suited for individuals who want to build a career by solving crimes. Student can do 12(Science Stream). Then complete B.Sc in Forensic Sciences. Further you can Proceed with M.Sc in Forensic Sciences. Clinical forensic medicine: It deals with the examination of the living individuals, such as cases of sexual offences, wound certificate, age estimation, etc. Forensic pathology: It deals with interpretation of autopsy findings in the medicolegal investigation of death (forensic thanatology — Study of death). It can be defined as “a branch of medicine that applies the principles and knowledge of the medical sciences to problems in the field of law,” (DiMaio & DiMaio, 2001, p. 1). Consequently, to be a practicing forensic pathologist, one must also be a medical doctor.Graduate degree programs in criminal and forensic science take anywhere from two to five years to complete after you have finished your bachelor's degree",
    },
    {
      title: 'DENTAL',
      img: '../../assets/head/course3/lafayett-zapata-montero-loBRFqXm1QA-unsplash.jpg',
      description:
        'The only professional dental course recognized in India is the 5-year undergraduate BDS (Bachelor of Dental Surgery) degree Dentistry, also known as dental medicine and oral medicine, is the branch of medicine focused on the teeth, gums, and mouth',
    },
    {
      title: 'CLINICL ROTATION',
      img: '../../assets/head/course4/WhatsApp Image 2022-12-15 at 13.48.42 (1).jpeg',
      description:
        "Clinical rotations are the time medical students spend as members of a medical team so they can learn what is involved with each medical specialty. The main difference between a clinical clerkship vs internship is when you'll take it. Clerkship occurs at your last stage of medical school. Internship happens after you graduate from medical school . Clinical rotations in medical school are assigned shifts at an approved healthcare site. Once assigned to a site, students deliver supervised care individually and as a team. Tasks such as patient interviews, examinations, lab data reviews, and team discussions are common practice",
    },
  ];
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openLink(url: string) {
    window.open(url, '_blank');
  }

  onShowMore() {
    this.showMore = !this.showMore;
  }

  openCourseDetails(course: any) {
    // window.scroll({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth',
    // });
    const modalRef = this.modalService.open(CourseDetailComponent, {
      size: 'xl',
      backdrop: 'static',
      fullscreen: true,
      windowClass: 'fullscreen-modal',
      scrollable: true,
    });
    modalRef.componentInstance.course = course;
  }

  // openMail() {
  //   window.location.href = 'mailto:futurestudents599@gmail.com';
  // }
}
