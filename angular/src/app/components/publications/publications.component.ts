import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-publications",
  templateUrl: "./publications.component.html",
  styleUrls: ["./publications.component.scss"]
})
export class PublicationsComponent implements OnInit {
  filter: string = "";
  data: Publication[];
  urlStart = "/assets/Publications/";
  @ViewChild("container") private container: ElementRef;

  constructor() {
    this.data = [
      {
        name:
          "Radiation Dose Benchmarks in Pediatric Cardiac Catheterization: A Prospective Multi-Center C3PO-QI Study",
        authors:
          "Priscila C. Cevallos, Aimee K. Armstrong, Andrew C. Glatz, Bryan H. Goldstein, Todd M. Gudausky, Ryan A. Leahy, Christopher J. Petit, Shabana Shahanavaz, Sara M. Trucco, Lisa J. Bergersen",
        source: "CCI",
        date: "Feb 15, 2017",
        pages: "",
        link: this.getUrl("Radiation Benchmarks 2017"),
        epub: "[Epub ahead of print]"
      },

      {
        name:
          "Implementation of Methodology for Quality Improvement in Pediatric Cardiac Catheterization: A Multi-center Initiative by the Congeital Cardiac Catheterization Project on Outcomes – Quality Improvement (C3PO-QI) ",
        authors:
          "Priscila C. Cevallos, Molly J. Rose, Laurie B. Armsby, Aimee K. Armstrong, Howaida EL-Said, Susan R. Foerster, Andrew C. Glatz, Bryan H. Goldstein, Michael R. Hainstock, Jacqueline Kreutzer, Larry A. Latson, Ryan A. Leahy, Christopher J. Petit, Alejandro Torres, Shabana Shahanavaz, Jeffrey D. Zampi, Lisa Bergersen",
        source: "Pediatr Cardiol",
        date: "July 2016",
        pages: "",
        link: this.getUrl("art_3A10-1007_2Fs00246-016-1454-z"),
        epub: "[Epub ahead of print]"
      },
      {
        name:
          "Safety of Percutaneous Patent Ductus Arteriosus Closure: An Unselected Multicenter Population Experience",
        authors:
          "Howaida G. El-Said, MD PhD; Andras Bratincsak, MD PhD; Susan R. Foerster, MD; Joshua J. Murphy, MD; Julie Vincent, MD: Ralf Holzer, MD; Diego Porras, MD; John Moore, MD, MPH; Lisa Bergersen, MD, MPH ",
        source: "J Am Heart Assoc.",
        date: "2013",
        pages: "2:e000424",
        link: this.getUrl("J_Am_Heart_Assoc-2013-El-Said"),
        epub: ""
      },
      {
        name:
          "Device Therapy for Atrial Septal Defects in a Multicenter Cohort: Acute Outcomes and Adverse Events",
        authors:
          "Howaida El-Said, MD, PhD; Sanjeet Hegde, MD PhD; Susan Foerster, MD; William Hellenbrand, MD; Jacqueline Kreutzer, MD; Sara M. Trucco, MD; Ralf Holzer, MD; Grant Burch, MD; Ajay Mirani, MD; Ramzi Nicolas, MD; Diego Porras, MD; Lisa Bergersen, MD, MPH; John Moore, MD MPH",
        source: "Catheter Cardiovasc Interv.",
        date: "2015",
        pages: "85:227-233",
        link: this.getUrl(
          "El-Said_et_al-2015-Catheterization_and_Cardiovascular_Interventions"
        ),
        epub: ""
      },
      {
        name:
          "Quality Metrics in Cardiac Catheterization for Congenital Heart Disease: Utility of 30-Day Mortality",
        authors:
          "Carl H. Backes, MD, Lisa Bergersen, MD, Jonathan J. Rome, MD, Sarosh P. Batlivala, MD, Andrew C. Glatz, MD, Bugsu Ovunc, MD, Sthuthi David, MS, Brian K. Rivera, MS, Urbee Haque, MS, Kevin Kollins, MD, Han Yin, MS, and Ralf J. Holzer, MD",
        source: "Catheter Cardiovasc Interv.",
        date: "2015",
        pages: "85:104-110",
        link: this.getUrl(
          "Backes_et_al-2015-Catheterization_and_Cardiovascular_Interventions"
        ),
        epub: ""
      },
      {
        name:
          "Sedation and Anesthesia in Pediatric and Congenital Cardiac Catheterization: A Prospective Multicenter Experience",
        authors:
          "C. Huie Lin, Sanyukta Desai, Ramzi Nicolas, Kimberlee Gauvreau, Susan Foerster, Anshuman Sharma, Laurie Armsby, Audrey C. Marshall, Kirsten Odegard, James DiNardo, Julie Vincent, Howaida El-Said, James Spaeth, Bryan Goldstein, Ralf Holzer, Jackie Kreutzer, David Balzer, Lisa Bergersen",
        source: "Pediatr Cardiol",
        date: "2015",
        pages: "36:1363-1375",
        link: this.getUrl("Lin_Sedation"),
        epub: ""
      },
      {
        name:
          "Balloon Valvuloplasty for Congenital Aortic Stenosis: Multi-Center Safety and Efficacy Outcome Assessment",
        authors:
          "Alejandro Torres, MD, Julie A. Vincent, MD, Allen Everett, MD, Scott Lim, MD, Susan R. Foerster, MD, Audrey C. Marshall, MD, Robert H. Beekman III, MD, Joshua Murphy, MD, Sara M. Trucco, MD, Kimberlee Gauvreau, MD, Ralf Holzer, MD MSc, Lisa Bergersen, MD MPH, Diego Porras, MD",
        source: "Catheter Cardiovasc Interv.",
        date: "2015",
        pages: "86:808-820",
        link: this.getUrl(
          "Torres_et_al-2015-Catheterization_and_Cardiovascular_Interventions"
        ),
        epub: ""
      },
      {
        name:
          "Practive Variation in Single-Ventricle Patients Undergoing Elective Cardiac Catheterization: A Report from the Congenital Cardiac Catheterization Project on Outcomes (C3PO)",
        authors:
          "Bryan H. Goldstein, MD, Ralf J. Holzer, MD, MSc, Sara M. Trucco, MD, Diego Porras, MD, Joshua Murphy, MD, Susan R. Foerster, MD, Howaida G. El-Said, MD, Robert H. Beekman III, MD, Lisa Bergersen, MD MPH",
        source: "Congenit Heart Dis.",
        date: "2016",
        pages: "11:122-135",
        link: this.getUrl("Goldstein_et_al-2016-Congenital_Heart_Disease"),
        epub: ""
      },
      {
        name:
          "Developing Tools to Measure Quality in Congenital Catheterization and Interventions: The Congenital Cardiac Catheterization Project on Outcomes (C3PO)",
        authors:
          "Nadia Chaudhry-Watermana, Sandra Coombsa, Diego Porras, MD, Ralf Holzer, MD, Lisa Bergersen, MD, MPH",
        source: " MDCVJ | X (2)",
        date: "2014",
        pages: "",
        link: this.getUrl("4_JMDHVC10.2_DL_Chaudhry_Waterman"),
        epub: ""
      },
      {
        name:
          "Radiation Dose Benchmarks during Cardiac Catheterization for Congenital Heart Disease in the United States",
        authors:
          "Sunil J. Ghelani, Andrew Glatz, Sthuthi David, Ryan Leahy, Russel Hirsch, Laurie Armsby, Sara Trucco, Ralf Holzer, Lisa Bergersen",
        source: "JACC",
        date: "April 1, 2014",
        pages: "Volume 63, Issue 12",
        link: this.getUrl("J. Am. Coll. Cardiol. 2014 Ghelani"),
        epub: ""
      },
      {
        name:
          "Adverse event rates in congenital cardiac catheterization - a multi-center experience",
        authors:
          " Lisa Bergersen, MD, Audrey Marshall, MD, Kimberlee Gauvreau, ScD, Robert Beekman, MD, Russel Hirsch, MD, Susan Foerster, MD, David Balzer, MD, Julie Vincent, MD, William Hellenbrand, MD, Ralf Holzer, MD, John Cheatham, MD, John Moore, MD, James Lock, MD, and Kathy Jenkins, MD, MPH",
        source: "Catheter Cardiovasc Interv.",
        date: "2010",
        pages: "75:389-400",
        link: this.getUrl("2010_C3PO_Adverse event rates"),
        epub: ""
      },
      {
        name:
          "Procedure-Type Risk Categories for Pediatric and Congenital Cardiac Catheterization",
        authors:
          " Lisa Bergersen, MD, MPH; Kimberlee Gauvreau, ScD; Audrey Marshall, MD; Jacqueline Kreutzer, MD; Robert Beekman, MD; Russel Hirsch, MD; Susan Foerster, MD; David Balzer, MD; Julie Vincent, MD; William Hellenbrand, MD; Ralf Holzer, MD; John Cheatham, MD; John Moore, MD; James Lock, MD; Kathy Jenkins, MD, MPH",
        source: "Circ Cardiovasc Interv.",
        date: "2011",
        pages: "4:188-94",
        link: this.getUrl("2011_C3PO_Procedure-Type Risk Categories"),
        epub: ""
      },
      {
        name:
          "Catheterization for Congenital Heart Disease Adjustment for Risk Method - CHARM ",
        authors:
          "Lisa Bergersen, MD, MPH, Kimberlee Gauvreau, SCD, Susan R. Foerster, MD, Audrey C. Marshall, MD, Doff B. McElhinney, MD, Robert H. Beekman III, MD, Russel Hirsch, MD, Jacqueline Kreutzer, MD, David Balzer, MD, Julie Vincent, MD, Willian E. Hellenbrand, MD,Ralf Holzer, MD, John P. Cheatham, MD, John W. Moore, MD, Grant Burch, MD, Laurie Armsby, MD, James E. Lock, MD, Kathy J. Jenkins, MD, MPH",
        source: "JACC Cardiovasc Interv.",
        date: "2011",
        pages: "4:1037-46",
        link: this.getUrl("2011_Catheterization for Congenital Heart Disease"),
        epub: ""
      },
      {
        name:
          "Balloon angioplasty and stenting of branch pulmonary arteries. Adverse events and procedural characteristics Results of a multi-institutional registry",
        authors:
          "Ralf J. Holzer, MD, MSc; Kimberlee Gauvreau, ScD; Jacqueline Kreutzer, MD; Ryan Leahy, MD; Joshua Murphy, MD; James E. Lock, MD; John P. Cheatham, MD; Lisa Bergersen, MD, MPH",
        source: "Circ Cardiovasc Interv.",
        date: "2011",
        pages: "4:287-96",
        link: this.getUrl("2010_C3PO_Balloon angioplasty"),
        epub: ""
      },
      {
        name:
          "Hybrid Procedures: Adverse Events and Procedural Characteristics - Results of a Multi-institutional Registry",
        authors:
          "Ralf Holzer, MD, Audrey Marshall, MD, Jackie Kreutzer, MD, Russel Hirsch, MD,Joanne Chisolm, RN, Sharon Hill, ACNP,Mark Galantowicz, MD,Alistair Phillips, MD,John Cheatham, MD, and Lisa Bergerson, MD",
        source: "Congenit Heart Dis.",
        date: "2010",
        pages: "5:233-42",
        link: this.getUrl("2010_C3PO_Hybrid Procedures AE"),
        epub: ""
      },
      {
        name:
          "Endomyocardial biopsy and selective coronary angiography are low-risk procedures in pediatric heart transplant recipients: Results of a multicenter experience",
        authors:
          "Ralf J. Holzer, MD, MSc; Kimberlee Gauvreau, ScD; Jacqueline Kreutzer, MD; Ryan Leahy, MD; Joshua Murphy, MD; James E. Lock, MD; John P. Cheatham, MD; Lisa Bergersen, MD, MPH",
        source: "J Heart Lung Transplant",
        date: "2012",
        pages: "31:398-409",
        link: this.getUrl("2011_C3PO_Endomyocardial biopsy"),
        epub: ""
      },
      {
        name:
          "Balloon Angioplasty and Stenting of Branch Pulmonary Arteries, Adverse Events and Procedural Characteristics: Results of a Multi-Institutional Registry",
        authors:
          "Ralf J. Holzer, MD, MSc; Kimberlee Gauvreau, ScD; Jacqueline Kreutzer, MD; Ryan Leahy, MD; Joshua Murphy, MD; James E. Lock, MD; John P. Cheatham, MD; Lisa Bergersen, MD, MPH",
        source: "Circ Cardiovasc Interv",
        date: "2011",
        pages: "4:287-96",
        link: this.getUrl("2011_Balloon angioplasty "),
        epub: ""
      },
      {
        name:
          "Adverse events rates and risk factors in adults undergoing cardiac catheterization at pediatric hospitals - results from the C3PO",
        authors:
          "Learn CP, Holzer RJ, Daniels CJ, Torres AJ, Vincent JA, Moore JW, Armsby LB, Landzberg MJ, Bergersen L",
        source: "Catheter Cardiovasc Interv",
        date: "2013",
        pages: "81:997-1005",
        link: this.getUrl("learn"),
        epub: ""
      },
      {
        name:
          "Relationship between procedural adverse events associated with cardiac catheterization for congenital heart disease and operator factors: Results of a multi-institutional registry (C3PO)",
        authors:
          "Holzer RJ, Gauvreau K, Kreutzer J, Moore JW, McElhinney DB, Bergersen L",
        source: "Catheter Cardiovasc Interv.",
        date: "Feb 14 2013",
        pages: "",
        link: this.getUrl("holzer"),
        epub: ""
      },
      {
        name:
          "The efficacy and safety of balloon vavuloplasty: A Multi-Center Experience",
        authors:
          "Holzer R, Gauvreau K, Kreutzer J, Trucco S, Torres A, Shahanavaz S, Bergersen L",
        source: "Catheter Cardiovasc Interv.",
        date: "Mar 2012",
        pages: "doi: 10.1002/ccd.23473",
        link: this.getUrl(
          "2012_Efficacy and Safety of Pulmonary Valvuloplasty- A multi-center exp"
        ),
        epub: ""
      },
      {
        name:
          "Low weight as an independent risk factor for adverse events during cardiac catheterization of infants",
        authors:
          "Backes CH, Cua C, Kreutzer J, Armsby L, El-Said H, Moore JW, Gauvreau K, Bergersen L, Holzer RJ",
        source: "Catheter Cardiovasc Interv.",
        date: "Feb 22 2013",
        pages: "",
        link: this.getUrl("backes"),
        epub: ""
      },
      {
        name:
          "Report from The International Society for Nomenclature of Paediatric and Congenital Heart Disease: cardiovascular catheterisation for congenital and paediatric cardiac disease",
        authors:
          "Lisa Bergersen, Allen Dale Everett, Jorge Manuel Giroud, Gerard R. Martin, Rodney Cyril George Franklin, Marie Jose Beland, Otto Nils Krogmann, Vera Demarchi Aiello, Steven D. Colan, Martin J. Elliott, J. William Gaynor, Hiromi Kurosawa, Bohdan Maruszewski, Giovanni Stellin, Christo I. Tchervenkov, Henry Lane Walters III, Paul Weinberg, Jeffrey Phillip Jacobs, Jose Beland",
        source: "Cardiol Young",
        date: "2011",
        pages: "21:252-9",
        link: this.getUrl("2011_Report 1"),
        epub: ""
      }, 
      {
        name:
          "Report from The International Society for Nomenclature of Paediatric and Congenital Heart Disease: cardiovascular catheterisation for congenital and paediatric cardiac disease interventional cardiology",
        authors:
          "Lisa Bergersen, Jorge Manuel Giroud, Jeffrey Phillip Jacobs, Rodney Cyril George Franklin, Marie Jose Beland, Otto Nils Krogmann, Vera Demarchi Aiello, Steven D. Colan, Martin J. Elliott, J. William Gaynor, Hiromi Kurosawa, Bohdan Maruszewski, Giovanni Stellin, Christo I. Tchervenkov, Henry Lane Walters III, Paul Weinberg, Allen Dale Everett ",
        source: "Cardiol Young",
        date: "2011",
        pages: "21:260-5",
        link: this.getUrl("2011_Report 2"),
        epub: ""
      }
    ];
  }

  ngOnInit() {}

  scroll() {
    try {
      this.container.nativeElement.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    } catch (err) {}
  }

  getUrl(link) {
    return this.urlStart + link + ".pdf";
  }
}

interface Publication {
  name: string;
  authors: string;
  source: string;
  date: string;
  pages: string;
  link: string;
  epub: string;
}
