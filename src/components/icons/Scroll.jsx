import React from "react";

const Scroll = ({
  className,
  width = "24",
  height = "24",
  color = "#14142B",
  fill = false,
  ...props
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      {...props}
      fill={fill ? "fill" : "none"}
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.1726 3H17.1536H17.1238H17.094H17.0641H17.0341H17.0039H16.9737H16.9434H16.913H16.8825H16.8518H16.8212H16.7904H16.7595H16.7285H16.6975H16.6663H16.6351H16.6038H16.5723H16.5409H16.5093H16.4776H16.4459H16.4141H16.3822H16.3502H16.3181H16.286H16.2538H16.2215H16.1891H16.1567H16.1242H16.0916H16.059H16.0262H15.9934H15.9606H15.9276H15.8947H15.8616H15.8285H15.7953H15.762H15.7287H15.6953H15.6619H15.6284H15.5948H15.5612H15.5276H15.4938H15.4601H15.4262H15.3923H15.3584H15.3244H15.2904H15.2563H15.2221H15.1879H15.1537H15.1194H15.0851H15.0507H15.0163H14.9819H14.9474H14.9128H14.8782H14.8436H14.809H14.7743H14.7395H14.7048H14.67H14.6351H14.6003H14.5654H14.5304H14.4955H14.4605H14.4255H14.3904H14.3554H14.3203H14.2851H14.25H14.2148H14.1796H14.1444H14.1092H14.074H14.0387H14.0034H13.9681H13.9328H13.8974H13.8621H13.8267H13.7914H13.756H13.7206H13.6852H13.6498H13.6143H13.5789H13.5435H13.5081H13.4726H13.4372H13.4017H13.3663H13.3308H13.2954H13.2599H13.2245H13.189H13.1536H13.1182H13.0827H13.0473H13.0119H12.9765H12.9411H12.9057H12.8703H12.835H12.7996H12.7643H12.729H12.6937H12.6584H12.6231H12.5878H12.5526H12.5174H12.4822H12.447H12.4119H12.3768H12.3417H12.3066H12.2715H12.2365H12.2015H12.1665H12.1316H12.0967H12.0618H12.027H11.9922H11.9574H11.9227H11.888H11.8533H11.8187H11.7841H11.7495H11.715H11.6806H11.6462H11.6118H11.5774H11.5431H11.5089H11.4747H11.4406H11.4065H11.3724H11.3384H11.3044H11.2705H11.2367H11.2029H11.1692H11.1355H11.1019H11.0683H11.0348H11.0013H10.968H10.9346H10.9014H10.8682H10.835H10.802H10.7689H10.736H10.7031H10.6703H10.6376H10.6049H10.5723H10.5398H10.5074H10.475H10.4427H10.4104H10.3783H10.3462H10.3142H10.2823H10.2505H10.2187H10.187H10.1555H10.1239H10.0925H10.0612H10.0299H9.99877H9.96769H9.93671H9.90581H9.875H9.84428H9.81366H9.78313H9.7527H9.72235H9.69211H9.66196H9.63191H9.60196H9.57211H9.54236H9.51271H9.48316H9.45372H9.42438H9.39514H9.36601H9.33699H9.30807H9.27927H9.25057H9.22198H9.19351H9.16515H9.1369H9.10876H9.08074H9.05283H9.02504H8.99737H8.96982H8.94238H8.91507H8.88788H8.8608H8.83386H8.80703H8.78033H8.75376H8.72731H8.70099H8.6748H8.64873H8.6228H8.597H8.57133H8.54579H8.52039H8.49512H8.46998H8.44498H8.42012H8.3954H8.37082H8.34637H8.32207H8.29791H8.27389H8.25001H8.22628H8.20269H8.17925H8.15596H8.13281H8.10982H8.08697H8.06427H8.04173H8.01933H7.9971H7.97501H7.95308H7.9313H7.90969H7.88823H7.86693H7.84578H7.8248H7.80398H7.78333H7.76283H7.7425H7.72233H7.70233H7.6825H7.66283H7.64334H7.62401H7.60485H7.58586H7.56705H7.54841H7.52994H7.51165H7.49353H7.47559H7.45782H7.44024H7.42283H7.4056H7.38856H7.37169H7.35501H7.33852H7.3222H7.30608H7.29014H7.27438H7.25882H7.24344H7.22825H7.21326H7.19845H7.18384H7.16942H7.1552H7.14117H7.12734H7.1137H7.10027H7.08703H7.07399H7.06115H7.04851H7.03608H7.02385H7.01182H7C6.67498 3 6.4977 3.07838 6.39845 3.14455C6.29294 3.21489 6.21011 3.31584 6.14443 3.44721C6.07678 3.5825 6.03798 3.72989 6.01764 3.8519C6.00787 3.91053 6.00337 3.95721 6.00136 3.98531C6.00053 3.99696 6.00016 4.00504 6 4.00902V16H14C14.5523 16 15 16.4477 15 17V19.991C15.0002 19.995 15.0005 20.003 15.0014 20.0147C15.0034 20.0428 15.0079 20.0895 15.0176 20.1481C15.038 20.2701 15.0768 20.4175 15.1444 20.5528C15.2101 20.6842 15.2929 20.7851 15.3984 20.8554C15.4977 20.9216 15.675 21 16 21C16.325 21 16.5023 20.9216 16.6016 20.8554C16.7071 20.7851 16.7899 20.6842 16.8556 20.5528C16.9232 20.4175 16.962 20.2701 16.9824 20.1481C16.9921 20.0895 16.9966 20.0428 16.9986 20.0147C16.9995 20.003 16.9998 19.995 17 19.991V7V4H18C17 4 17 3.9995 17 3.999L17 3.99795L17 3.9957L17 3.99061L17.0002 3.97814C17.0003 3.96881 17.0006 3.95746 17.001 3.94422C17.0019 3.91778 17.0035 3.88362 17.0064 3.84282C17.0123 3.76154 17.0234 3.65197 17.0449 3.5231C17.0693 3.37651 17.1085 3.19646 17.1726 3ZM4 16V4H5C4 4 4 3.9995 4 3.999L4 3.99795L4.00001 3.9957L4.00004 3.99061L4.00019 3.97814C4.00034 3.96881 4.0006 3.95746 4.00104 3.94422C4.00192 3.91778 4.00353 3.88362 4.00645 3.84282C4.01225 3.76154 4.02338 3.65197 4.04486 3.5231C4.08702 3.27011 4.17322 2.9175 4.35557 2.55279C4.53989 2.18416 4.83206 1.78511 5.28905 1.48045C5.7523 1.17162 6.32502 1 7 1H7.01182H7.02385H7.03608H7.04851H7.06115H7.07399H7.08703H7.10027H7.1137H7.12734H7.14117H7.1552H7.16942H7.18384H7.19845H7.21326H7.22825H7.24344H7.25882H7.27438H7.29014H7.30608H7.3222H7.33852H7.35501H7.37169H7.38856H7.4056H7.42283H7.44024H7.45782H7.47559H7.49353H7.51165H7.52994H7.54841H7.56705H7.58586H7.60485H7.62401H7.64334H7.66283H7.6825H7.70233H7.72233H7.7425H7.76283H7.78333H7.80398H7.8248H7.84578H7.86693H7.88823H7.90969H7.9313H7.95308H7.97501H7.9971H8.01933H8.04173H8.06427H8.08697H8.10982H8.13281H8.15596H8.17925H8.20269H8.22628H8.25001H8.27389H8.29791H8.32207H8.34637H8.37082H8.3954H8.42012H8.44498H8.46998H8.49512H8.52039H8.54579H8.57133H8.597H8.6228H8.64873H8.6748H8.70099H8.72731H8.75376H8.78033H8.80703H8.83386H8.8608H8.88788H8.91507H8.94238H8.96982H8.99737H9.02504H9.05283H9.08074H9.10876H9.1369H9.16515H9.19351H9.22198H9.25057H9.27927H9.30807H9.33699H9.36601H9.39514H9.42438H9.45372H9.48316H9.51271H9.54236H9.57211H9.60196H9.63191H9.66196H9.69211H9.72235H9.7527H9.78313H9.81366H9.84428H9.875H9.90581H9.93671H9.96769H9.99877H10.0299H10.0612H10.0925H10.1239H10.1555H10.187H10.2187H10.2505H10.2823H10.3142H10.3462H10.3783H10.4104H10.4427H10.475H10.5074H10.5398H10.5723H10.6049H10.6376H10.6703H10.7031H10.736H10.7689H10.802H10.835H10.8682H10.9014H10.9346H10.968H11.0013H11.0348H11.0683H11.1019H11.1355H11.1692H11.2029H11.2367H11.2705H11.3044H11.3384H11.3724H11.4065H11.4406H11.4747H11.5089H11.5431H11.5774H11.6118H11.6462H11.6806H11.715H11.7495H11.7841H11.8187H11.8533H11.888H11.9227H11.9574H11.9922H12.027H12.0618H12.0967H12.1316H12.1665H12.2015H12.2365H12.2715H12.3066H12.3417H12.3768H12.4119H12.447H12.4822H12.5174H12.5526H12.5878H12.6231H12.6584H12.6937H12.729H12.7643H12.7996H12.835H12.8703H12.9057H12.9411H12.9765H13.0119H13.0473H13.0827H13.1182H13.1536H13.189H13.2245H13.2599H13.2954H13.3308H13.3663H13.4017H13.4372H13.4726H13.5081H13.5435H13.5789H13.6143H13.6498H13.6852H13.7206H13.756H13.7914H13.8267H13.8621H13.8974H13.9328H13.9681H14.0034H14.0387H14.074H14.1092H14.1444H14.1796H14.2148H14.25H14.2851H14.3203H14.3554H14.3904H14.4255H14.4605H14.4955H14.5304H14.5654H14.6003H14.6351H14.67H14.7048H14.7395H14.7743H14.809H14.8436H14.8782H14.9128H14.9474H14.9819H15.0163H15.0507H15.0851H15.1194H15.1537H15.1879H15.2221H15.2563H15.2904H15.3244H15.3584H15.3923H15.4262H15.4601H15.4938H15.5276H15.5612H15.5948H15.6284H15.6619H15.6953H15.7287H15.762H15.7953H15.8285H15.8616H15.8947H15.9276H15.9606H15.9934H16.0262H16.059H16.0916H16.1242H16.1567H16.1891H16.2215H16.2538H16.286H16.3181H16.3502H16.3822H16.4141H16.4459H16.4776H16.5093H16.5409H16.5723H16.6038H16.6351H16.6663H16.6975H16.7285H16.7595H16.7904H16.8212H16.8518H16.8825H16.913H16.9434H16.9737H17.0039H17.0341H17.0641H17.094H17.1238H17.1536H17.1832H17.2127H17.2422H17.2715H17.3007H17.3298H17.3588H17.3877H17.4165H17.4452H17.4737H17.5022H17.5305H17.5587H17.5869H17.6149H17.6427H17.6705H17.6982H17.7257H17.7531H17.7804H17.8075H17.8346H17.8615H17.8883H17.915H17.9415H17.968H17.9943H18.0204H18.0465H18.0724H18.0981H18.1238H18.1493H18.1747H18.1999H18.225H18.25H18.2748H18.2995H18.3241H18.3485H18.3728H18.3969H18.4209H18.4447H18.4685H18.492H18.5154H18.5387H18.5618H18.5848H18.6076H18.6302H18.6528H18.6751H18.6973H18.7194H18.7413H18.763H18.7846H18.806H18.8273H18.8484H18.8694H18.8902H18.9108H18.9312H18.9515H18.9717H18.9916H19.0114H19.0311H19.0505H19.0698H19.089H19.1079H19.1267H19.1453H19.1637H19.182H19.2001H19.218H19.2357H19.2533H19.2706H19.2878H19.3048H19.3217H19.3383H19.3548H19.371H19.3871H19.403H19.4187H19.4343H19.4496H19.4648H19.4797H19.4945H19.5091H19.5234H19.5376H19.5516H19.5654H19.579H19.5924H19.6056H19.6186H19.6314H19.644H19.6564H19.6686H19.6806H19.6923H19.7039H19.7153H19.7264H19.7374H19.7481H19.7587H19.769H19.7791H19.789H19.7987H19.8081H19.8174H19.8264H19.8352H19.8438H19.8522H19.8603H19.8683H19.876H19.8835H19.8907H19.8978H19.9046H19.9112H19.9175H19.9236H19.9296H19.9352H19.9407H19.9459H19.9508H19.9556H19.9601H19.9644H19.9684H19.9722H19.9757H19.9791H19.9821H19.985H19.9876H19.9899H19.992H19.9939H19.9955H19.9969H19.998H19.9989H19.9995H19.9999C19.9999 1 20 1 20 1C20.675 1 21.2477 1.17162 21.711 1.48045C22.1679 1.78511 22.4601 2.18416 22.6444 2.55279C22.8268 2.9175 22.913 3.27011 22.9551 3.5231C22.9766 3.65197 22.9877 3.76154 22.9936 3.84282C22.9965 3.88362 22.9981 3.91778 22.999 3.94422L22.9995 3.9625L22.9998 3.97814L23 3.99061L23 3.9957L23 3.99795L23 3.999C23 3.9995 23 4 22 4H23V7C23 7.55228 22.5523 8 22 8H19V20H18C19 20 19 20.0005 19 20.001L19 20.0021L19 20.0043L19 20.0094L18.9998 20.0219C18.9997 20.0312 18.9994 20.0425 18.999 20.0558C18.9981 20.0822 18.9965 20.1164 18.9936 20.1572C18.9877 20.2385 18.9766 20.348 18.9551 20.4769C18.913 20.7299 18.8268 21.0825 18.6444 21.4472C18.4601 21.8158 18.1679 22.2149 17.7109 22.5196C17.2477 22.8284 16.675 23 16 23H15.9882H15.9763H15.9642H15.952H15.9397H15.9272H15.9146H15.9019H15.889H15.876H15.8629H15.8496H15.8362H15.8227H15.8091H15.7953H15.7814H15.7673H15.7532H15.7389H15.7245H15.7099H15.6952H15.6804H15.6655H15.6505H15.6353H15.62H15.6046H15.5891H15.5734H15.5576H15.5417H15.5257H15.5096H15.4933H15.4769H15.4604H15.4438H15.4271H15.4103H15.3933H15.3762H15.3591H15.3418H15.3243H15.3068H15.2892H15.2714H15.2536H15.2356H15.2175H15.1993H15.181H15.1626H15.1441H15.1255H15.1068H15.0879H15.069H15.0499H15.0308H15.0115H14.9922H14.9727H14.9532H14.9335H14.9137H14.8939H14.8739H14.8538H14.8337H14.8134H14.793H14.7726H14.752H14.7314H14.7106H14.6898H14.6688H14.6478H14.6267H14.6054H14.5841H14.5627H14.5412H14.5196H14.4979H14.4762H14.4543H14.4324H14.4103H14.3882H14.366H14.3437H14.3213H14.2988H14.2763H14.2536H14.2309H14.2081H14.1852H14.1622H14.1391H14.116H14.0928H14.0695H14.0461H14.0226H13.9991H13.9755H13.9518H13.928H13.9042H13.8802H13.8562H13.8322H13.808H13.7838H13.7595H13.7351H13.7107H13.6861H13.6616H13.6369H13.6122H13.5874H13.5625H13.5376H13.5126H13.4875H13.4623H13.4371H13.4119H13.3865H13.3611H13.3357H13.3101H13.2845H13.2589H13.2332H13.2074H13.1815H13.1556H13.1297H13.1037H13.0776H13.0514H13.0252H12.999H12.9727H12.9463H12.9199H12.8934H12.8669H12.8403H12.8136H12.7869H12.7602H12.7334H12.7065H12.6796H12.6527H12.6257H12.5986H12.5715H12.5444H12.5172H12.49H12.4627H12.4353H12.4079H12.3805H12.353H12.3255H12.298H12.2704H12.2427H12.215H12.1873H12.1595H12.1317H12.1039H12.076H12.0481H12.0201H11.9921H11.9641H11.936H11.9079H11.8797H11.8516H11.8233H11.7951H11.7668H11.7385H11.7102H11.6818H11.6534H11.6249H11.5965H11.568H11.5394H11.5109H11.4823H11.4537H11.425H11.3964H11.3677H11.339H11.3102H11.2814H11.2527H11.2238H11.195H11.1662H11.1373H11.1084H11.0795H11.0505H11.0216H10.9926H10.9636H10.9346H10.9055H10.8765H10.8474H10.8183H10.7893H10.7601H10.731H10.7019H10.6727H10.6436H10.6144H10.5852H10.556H10.5268H10.4976H10.4684H10.4392H10.4099H10.3807H10.3514H10.3221H10.2929H10.2636H10.2343H10.205H10.1758H10.1465H10.1172H10.0879H10.0586H10.0293H10H9.9707H9.94141H9.91211H9.88282H9.85353H9.82424H9.79495H9.76567H9.73639H9.70712H9.67785H9.64859H9.61934H9.59009H9.56085H9.53162H9.50239H9.47318H9.44397H9.41478H9.38559H9.35642H9.32726H9.29811H9.26898H9.23985H9.21074H9.18165H9.15257H9.12351H9.09446H9.06543H9.03642H9.00742H8.97844H8.94948H8.92054H8.89162H8.86273H8.83385H8.80499H8.77616H8.74734H8.71855H8.68979H8.66105H8.63233H8.60364H8.57497H8.54633H8.51772H8.48913H8.46058H8.43205H8.40355H8.37508H8.34664H8.31823H8.28985H8.2615H8.23318H8.2049H8.17665H8.14844H8.12026H8.09211H8.064H8.03592H8.00789H7.97989H7.95192H7.924H7.89611H7.86826H7.84045H7.81269H7.78496H7.75727H7.72963H7.70203H7.67447H7.64695H7.61948H7.59205H7.56467H7.53734H7.51005H7.4828H7.45561H7.42846H7.40136H7.37431H7.34731H7.32035H7.29345H7.2666H7.2398H7.21306H7.18636H7.15972H7.13313H7.1066H7.08012H7.0537H7.02733H7.00102H6.97476H6.94856H6.92243H6.89634H6.87032H6.84436H6.81846H6.79262H6.76684H6.74112H6.71546H6.68987H6.66434H6.63887H6.61347H6.58813H6.56286H6.53765H6.51251H6.48744H6.46244H6.4375H6.41263H6.38783H6.3631H6.33845H6.31386H6.28934H6.2649H6.24052H6.21623H6.192H6.16785H6.14377H6.11977H6.09584H6.07199H6.04822H6.02452H6.0009H5.97736H5.9539H5.93052H5.90722H5.884H5.86086H5.8378H5.81482H5.79192H5.76911H5.74639H5.72374H5.70118H5.67871H5.65632H5.63402H5.61181H5.58968H5.56764H5.54569H5.52383H5.50206H5.48038H5.45879H5.43729H5.41588H5.39456H5.37334H5.35221H5.33118H5.31024H5.28939H5.26864H5.24798H5.22743H5.20696H5.1866H5.16634H5.14617H5.1261H5.10613H5.08627H5.0665H5.04684H5.02727H5.00781H4.98845H4.9692H4.95005H4.93101H4.91207H4.89323H4.8745H4.85588H4.83737H4.81896H4.80066H4.78247H4.76439H4.74642H4.72856H4.71082H4.69318H4.67565H4.65824H4.64094H4.62376H4.60669H4.58973H4.57289H4.55617H4.53956H4.52307H4.50669H4.49044H4.4743H4.45828H4.44238H4.4266H4.41095H4.39541H4.38H4.3647H4.34953H4.33449H4.31956H4.30477H4.29009H4.27555H4.26113H4.24683H4.23266H4.21862H4.20471H4.19093H4.17728H4.16375H4.15036H4.1371H4.12396H4.11097H4.0981H4.08537H4.07277H4.0603H4.04797H4.03577H4.02371H4.01179H4C3.32502 23 2.7523 22.8284 2.28905 22.5196C1.83206 22.2149 1.53989 21.8158 1.35557 21.4472C1.17322 21.0825 1.08702 20.7299 1.04486 20.4769C1.02338 20.348 1.01225 20.2385 1.00645 20.1572C1.00353 20.1164 1.00192 20.0822 1.00104 20.0558C1.0006 20.0425 1.00034 20.0312 1.00019 20.0219L1.00004 20.0094L1.00001 20.0043L1 20.0021L1 20.001C1 20.0005 1 20 2 20H1V17C1 16.4477 1.44772 16 2 16H4ZM21 6H19V4.00903C19.0002 4.00504 19.0005 3.99697 19.0014 3.98531C19.0034 3.95721 19.0079 3.91053 19.0176 3.8519C19.038 3.72989 19.0768 3.5825 19.1444 3.44721C19.2101 3.31584 19.2929 3.21489 19.3985 3.14455C19.4977 3.07838 19.675 3 20 3C20.325 3 20.5023 3.07838 20.6015 3.14455C20.7071 3.21489 20.7899 3.31584 20.8556 3.44721C20.9232 3.5825 20.962 3.72989 20.9824 3.8519C20.9921 3.91053 20.9966 3.95721 20.9986 3.98531C20.9995 3.99697 20.9998 4.00504 21 4.00903V6ZM13.0449 20.4769C13.0693 20.6235 13.1085 20.8035 13.1726 21H13.1556H13.1297H13.1037H13.0776H13.0514H13.0252H12.999H12.9727H12.9463H12.9199H12.8934H12.8669H12.8403H12.8136H12.7869H12.7602H12.7334H12.7065H12.6796H12.6527H12.6257H12.5986H12.5715H12.5444H12.5172H12.49H12.4627H12.4353H12.4079H12.3805H12.353H12.3255H12.298H12.2704H12.2427H12.215H12.1873H12.1595H12.1317H12.1039H12.076H12.0481H12.0201H11.9921H11.9641H11.936H11.9079H11.8797H11.8516H11.8233H11.7951H11.7668H11.7385H11.7102H11.6818H11.6534H11.6249H11.5965H11.568H11.5394H11.5109H11.4823H11.4537H11.425H11.3964H11.3677H11.339H11.3102H11.2814H11.2527H11.2238H11.195H11.1662H11.1373H11.1084H11.0795H11.0505H11.0216H10.9926H10.9636H10.9346H10.9055H10.8765H10.8474H10.8183H10.7893H10.7601H10.731H10.7019H10.6727H10.6436H10.6144H10.5852H10.556H10.5268H10.4976H10.4684H10.4392H10.4099H10.3807H10.3514H10.3221H10.2929H10.2636H10.2343H10.205H10.1758H10.1465H10.1172H10.0879H10.0586H10.0293H10H9.9707H9.94141H9.91211H9.88282H9.85353H9.82424H9.79495H9.76567H9.73639H9.70712H9.67785H9.64859H9.61934H9.59009H9.56085H9.53162H9.50239H9.47318H9.44397H9.41478H9.38559H9.35642H9.32726H9.29811H9.26898H9.23985H9.21074H9.18165H9.15257H9.12351H9.09446H9.06543H9.03642H9.00742H8.97844H8.94948H8.92054H8.89162H8.86273H8.83385H8.80499H8.77616H8.74734H8.71855H8.68979H8.66105H8.63233H8.60364H8.57497H8.54633H8.51772H8.48913H8.46058H8.43205H8.40355H8.37508H8.34664H8.31823H8.28985H8.2615H8.23318H8.2049H8.17665H8.14844H8.12026H8.09211H8.064H8.03592H8.00789H7.97989H7.95192H7.924H7.89611H7.86826H7.84045H7.81269H7.78496H7.75727H7.72963H7.70203H7.67447H7.64695H7.61948H7.59205H7.56467H7.53734H7.51005H7.4828H7.45561H7.42846H7.40136H7.37431H7.34731H7.32035H7.29345H7.2666H7.2398H7.21306H7.18636H7.15972H7.13313H7.1066H7.08012H7.0537H7.02733H7.00102H6.97476H6.94856H6.92243H6.89634H6.87032H6.84436H6.81846H6.79262H6.76684H6.74112H6.71546H6.68987H6.66434H6.63887H6.61347H6.58813H6.56286H6.53765H6.51251H6.48744H6.46244H6.4375H6.41263H6.38783H6.3631H6.33845H6.31386H6.28934H6.2649H6.24052H6.21623H6.192H6.16785H6.14377H6.11977H6.09584H6.07199H6.04822H6.02452H6.0009H5.97736H5.9539H5.93052H5.90722H5.884H5.86086H5.8378H5.81482H5.79192H5.76911H5.74639H5.72374H5.70118H5.67871H5.65632H5.63402H5.61181H5.58968H5.56764H5.54569H5.52383H5.50206H5.48038H5.45879H5.43729H5.41588H5.39456H5.37334H5.35221H5.33118H5.31024H5.28939H5.26864H5.24798H5.22743H5.20696H5.1866H5.16634H5.14617H5.1261H5.10613H5.08627H5.0665H5.04684H5.02727H5.00781H4.98845H4.9692H4.95005H4.93101H4.91207H4.89323H4.8745H4.85588H4.83737H4.81896H4.80066H4.78247H4.76439H4.74642H4.72856H4.71082H4.69318H4.67565H4.65824H4.64094H4.62376H4.60669H4.58973H4.57289H4.55617H4.53956H4.52307H4.50669H4.49044H4.4743H4.45828H4.44238H4.4266H4.41095H4.39541H4.38H4.3647H4.34953H4.33449H4.31956H4.30477H4.29009H4.27555H4.26113H4.24683H4.23266H4.21862H4.20471H4.19093H4.17728H4.16375H4.15036H4.1371H4.12396H4.11097H4.0981H4.08537H4.07277H4.0603H4.04797H4.03577H4.02371H4.01179H4C3.67498 21 3.4977 20.9216 3.39845 20.8554C3.29294 20.7851 3.21011 20.6842 3.14443 20.5528C3.07678 20.4175 3.03798 20.2701 3.01764 20.1481C3.00787 20.0895 3.00337 20.0428 3.00136 20.0147C3.00053 20.003 3.00016 19.995 3 19.991V18H5H13V20H14C13 20 13 20.0005 13 20.001L13 20.0021L13 20.0043L13 20.0094L13.0002 20.0219C13.0003 20.0278 13.0004 20.0345 13.0006 20.042C13.0007 20.0463 13.0009 20.0509 13.001 20.0558C13.0019 20.0822 13.0035 20.1164 13.0064 20.1572C13.0123 20.2385 13.0234 20.348 13.0449 20.4769Z"
        fill={color}
      />
      <path
        d="M9 8H14"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 12H14"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export { Scroll };