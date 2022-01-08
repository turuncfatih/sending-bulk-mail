const nodemailer = require("nodemailer");

class MailService {
    constructor() {
        this.email = 'Your E-mail'
        this.password = 'Your Password'
        this.subject = 'Test Netflix '
        this.text = ' Test Text'
        this.enTemplate = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="font-family:arial, 'helvetica neue', helvetica, sans-serif">
    <head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
   
  <!--[if (mso 16)]>
<style type="text/css">
    a {text-decoration: none;}
</style>
<![endif]-->
<!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
<!--[if gte mso 9]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG></o:AllowPNG>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
<style type="text/css">
    #outlook a {
    padding:0;
}
.es-button {
    mso-style-priority:100!important;
    text-decoration:none!important;
}
a[x-apple-data-detectors] {
    color:inherit!important;
    text-decoration:none!important;
    font-size:inherit!important;
    font-family:inherit!important;
    font-weight:inherit!important;
    line-height:inherit!important;
}
.es-desk-hidden {
    display:none;
    float:left;
    overflow:hidden;
    width:0;
    max-height:0;
    line-height:0;
    mso-hide:all;
}
[data-ogsb] .es-button {
    border-width:0!important;
    padding:10px 20px 10px 20px!important;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120% } h1 { font-size:30px!important; text-align:left } h2 { font-size:24px!important; text-align:left } h3 { font-size:20px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important; text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:24px!important; text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important; text-align:left } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:18px!important; display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }
</style>
</head>
<body style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
<div class="es-wrapper-color" style="background-color:#F6F6F6">
    <!--[if gte mso 9]>
             <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                 <v:fill type="tile" color="#f6f6f6"></v:fill>
             </v:background>
         <![endif]-->
    <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top">
        <tr>
            <td valign="top" style="padding:0;Margin:0">
                <table class="es-header es-visible-simple-html-only" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                    <tr>
                        <td class="es-stripe-html" align="center" bgcolor="#333" style="padding:0;Margin:0;background-color:#333333">
                            <table class="es-header-body" cellspacing="0" cellpadding="0" bgcolor="#010101" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#010101;width:600px">
                                <tr>
                                    <td align="left" bgcolor="#010101" style="padding:0;Margin:0;padding-left:15px;padding-right:15px;background-color:#010101">
                                        <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                            <tr>
                                                <td align="center" valign="top" style="padding:0;Margin:0;width:570px">
                                                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                        <tr>
                                                            <td align="center" style="padding:0;Margin:0;padding-bottom:10px;font-size:0px"><img class="adapt-img" src="https://mailaddstudio.s3.eu-central-1.amazonaws.com/NetflixMailing/net-eng.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="570"></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center" bgcolor="#010101" style="padding:0;Margin:0;font-size:0px">
                                                                <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                    <tr>
                                                                        <td style="padding:0;Margin:0;border-bottom:2px solid #dc0b16;background:none;height:1px;width:100%;margin:0px"></td>
                                                                    </tr>
                                                                </table></td>
                                                        </tr>
                                                    </table></td>
                                            </tr>
                                        </table></td>
                                </tr>
                            </table></td>
                    </tr>
                </table>
                <table class="es-content es-visible-simple-html-only" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                    <tr>
                        <td class="es-stripe-html" align="center" bgcolor="#333" style="padding:0;Margin:0;background-color:#333333">
                            <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#010101" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#010101;width:600px">
                                <tr>
                                    <td align="left" bgcolor="#010101" style="padding:20px;Margin:0;background-color:#010101">
                                        <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                            <tr>
                                                <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                                                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                        <tr>
                                                            <td align="left" bgcolor="#010101" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ffffff;font-size:14px"><br>At Netflix Turkey, we’re proud to work with talented writers to tell stories from our region to the world.<br><br>To continue amplifying our writer’s unique voices we are hosting a masterclass with creator/writer Joe Peracchio to share his knowledge and experience on storytelling.<br><br>This four day virtual workshop will take place between 15-18 November every day from 7pm-9pm TRT.<br><br>For registration and more information please visit storystructureworkshop.com . The event will be available both in Turkish and English. This is an invite only event.<br><br>Thank You,<br> Christopher Mack<br><br></p></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center" style="padding:0;Margin:0;font-size:0" bgcolor="#010101">
                                                                <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                    <tr>
                                                                        <td style="padding:0;Margin:0;border-bottom:2px solid #dc0b16;background:none;height:1px;width:100%;margin:0px"></td>
                                                                    </tr>
                                                                </table></td>
                                                        </tr>
                                                    </table></td>
                                            </tr>
                                        </table></td>
                                </tr>
                            </table></td>
                    </tr>
                </table>
                <table class="es-footer es-visible-simple-html-only" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                    <tr>
                        <td class="es-stripe-html" align="center" bgcolor="#333" style="padding:0;Margin:0;background-color:#333333">
                            <table class="es-footer-body" cellspacing="0" cellpadding="0" bgcolor="#010101" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#010101;width:600px">
                                <tr>
                                    <td align="left" bgcolor="#010101" style="Margin:0;padding-bottom:10px;padding-top:20px;padding-left:20px;padding-right:20px;background-color:#010101">
                                        <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:75px" valign="top"><![endif]-->
                                        <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                            <tr>
                                                <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:75px">
                                                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                        <tr>
                                                            <td align="center" style="padding:5px;Margin:0;font-size:0px"><img src="https://mailaddstudio.s3.eu-central-1.amazonaws.com/NetflixMailing/netflix-logo-90px-.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="35"></td>
                                                        </tr>
                                                    </table></td>
                                            </tr>
                                        </table>
                                        <!--[if mso]></td><td style="width:20px"></td><td style="width:465px" valign="top"><![endif]-->
                                        <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                            <tr>
                                                <td align="left" style="padding:0;Margin:0;width:465px">
                                                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                        <tr>
                                                            <td align="left" bgcolor="#010101" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:17px;color:#a5a5a5;font-size:14px">Questions? Email us at <a href="mailto:rsvp@storystructureworkshop.com" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#3d85c6;font-size:14px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif">rsvp@storystructureworkshop.com</a><br><br><span style="font-size:12px"><br></p></td>
                                                        </tr>
                                                    </table></td>
                                            </tr>
                                        </table>
                                        <!--[if mso]></td></tr></table><![endif]--></td>
                                </tr>
                            </table></td>
                    </tr>
                </table></td>
        </tr>
    </table>
</div>
</body>
</html>
`
        this.trTemplate = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="font-family:arial, 'helvetica neue', helvetica, sans-serif">
    <head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title>New message</title> 
  <!--[if (mso 16)]>
<style type="text/css">
    a {text-decoration: none;}
</style>
<![endif]-->
<!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
<!--[if gte mso 9]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG></o:AllowPNG>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
<style type="text/css">
    #outlook a {
    padding:0;
}
.es-button {
    mso-style-priority:100!important;
    text-decoration:none!important;
}
a[x-apple-data-detectors] {
    color:inherit!important;
    text-decoration:none!important;
    font-size:inherit!important;
    font-family:inherit!important;
    font-weight:inherit!important;
    line-height:inherit!important;
}
.es-desk-hidden {
    display:none;
    float:left;
    overflow:hidden;
    width:0;
    max-height:0;
    line-height:0;
    mso-hide:all;
}
[data-ogsb] .es-button {
    border-width:0!important;
    padding:10px 20px 10px 20px!important;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120% } h1 { font-size:30px!important; text-align:left } h2 { font-size:24px!important; text-align:left } h3 { font-size:20px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important; text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:24px!important; text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important; text-align:left } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:18px!important; display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }
</style>
</head>
<body style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
<div class="es-wrapper-color" style="background-color:#F6F6F6">
    <!--[if gte mso 9]>
             <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                 <v:fill type="tile" color="#f6f6f6"></v:fill>
             </v:background>
         <![endif]-->
    <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top">
        <tr>
            <td valign="top" style="padding:0;Margin:0">
                <table class="es-header es-visible-simple-html-only" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                    <tr>
                        <td class="es-stripe-html" align="center" bgcolor="#333" style="padding:0;Margin:0;background-color:#333333">
                            <table class="es-header-body" cellspacing="0" cellpadding="0" bgcolor="#010101" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#010101;width:600px">
                                <tr>
                                    <td align="left" bgcolor="#010101" style="padding:0;Margin:0;padding-left:15px;padding-right:15px;background-color:#010101">
                                        <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                            <tr>
                                                <td align="center" valign="top" style="padding:0;Margin:0;width:570px">
                                                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                        <tr>
                                                            <td align="center" style="padding:0;Margin:0;padding-bottom:10px;font-size:0px"><img class="adapt-img" src="https://mailaddstudio.s3.eu-central-1.amazonaws.com/NetflixMailing/net.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="570"></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center" bgcolor="#010101" style="padding:0;Margin:0;font-size:0px">
                                                                <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                    <tr>
                                                                        <td style="padding:0;Margin:0;border-bottom:2px solid #dc0b16;background:none;height:1px;width:100%;margin:0px"></td>
                                                                    </tr>
                                                                </table></td>
                                                        </tr>
                                                    </table></td>
                                            </tr>
                                        </table></td>
                                </tr>
                            </table></td>
                    </tr>
                </table>
                <table class="es-content es-visible-simple-html-only" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                    <tr>
                        <td class="es-stripe-html" align="center" bgcolor="#333" style="padding:0;Margin:0;background-color:#333333">
                            <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#010101" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#010101;width:600px">
                                <tr>
                                    <td align="left" bgcolor="#010101" style="padding:20px;Margin:0;background-color:#010101">
                                        <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                            <tr>
                                                <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                                                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                        <tr>
                                                            <td align="left" bgcolor="#010101" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ffffff;font-size:14px"><br>Netflix Türkiye olarak, yetenekli yazarlarımızın kaleminden çıkan, ülkemize özgü hikâyeleri tüm dünya ile paylaşmanın haklı gururunu yaşıyoruz.<br><br>Yazarlarımızın yeteneklerini desteklemek ve seslerini daha geniş kitlelere duyurmalarını sağlamak amacı ile bir atölye çalışması düzenliyoruz. Bu etkinlikte, yaratıcı/senarist Joe Peracchio, hikâye anlatımı konusundaki bilgilerini ve deneyimlerini sizlerle paylaşacak.<br><br>Dört gün sürecek sanal atölye çalışması 15-18 Kasım tarihlerinde, her gün 19.00-21.00 (TSİ) arasında gerçekleşecek.<br><br>Lütfen storystructureworkshop.com üzerinden kaydınızı oluşturmayı unutmayın. Türkçe ve İngilizce olarak katılabileceğiniz bu etkinlik sadece davetliler içindir.<br><br>Teşekkürler,<br> Christopher Mack<br><br></p></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center" style="padding:0;Margin:0;font-size:0" bgcolor="#010101">
                                                                <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                    <tr>
                                                                        <td style="padding:0;Margin:0;border-bottom:2px solid #dc0b16;background:none;height:1px;width:100%;margin:0px"></td>
                                                                    </tr>
                                                                </table></td>
                                                        </tr>
                                                    </table></td>
                                            </tr>
                                        </table></td>
                                </tr>
                            </table></td>
                    </tr>
                </table>
                <table class="es-footer es-visible-simple-html-only" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                    <tr>
                        <td class="es-stripe-html" align="center" bgcolor="#333" style="padding:0;Margin:0;background-color:#333333">
                            <table class="es-footer-body" cellspacing="0" cellpadding="0" bgcolor="#010101" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#010101;width:600px">
                                <tr>
                                    <td align="left" bgcolor="#010101" style="Margin:0;padding-bottom:10px;padding-top:20px;padding-left:20px;padding-right:20px;background-color:#010101">
                                        <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:75px" valign="top"><![endif]-->
                                        <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                            <tr>
                                                <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:75px">
                                                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                        <tr>
                                                            <td align="center" style="padding:5px;Margin:0;font-size:0px"><img src="https://mailaddstudio.s3.eu-central-1.amazonaws.com/NetflixMailing/netflix-logo-90px-.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="35"></td>
                                                        </tr>
                                                    </table></td>
                                            </tr>
                                        </table>
                                        <!--[if mso]></td><td style="width:20px"></td><td style="width:465px" valign="top"><![endif]-->
                                        <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                            <tr>
                                                <td align="left" style="padding:0;Margin:0;width:465px">
                                                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                        <tr>
                                                            <td align="left" bgcolor="#010101" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:17px;color:#a5a5a5;font-size:14px">Sorularınız için <a href="mailto:rsvp@storystructureworkshop.com" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#3d85c6;font-size:14px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif">rsvp@storystructureworkshop.com</a><br><br>adresinden bize ulaşabilirsiniz.<br><br><span style="font-size:12px"><br></p></td>
                                                        </tr>
                                                    </table></td>
                                            </tr>
                                        </table>
                                        <!--[if mso]></td></tr></table><![endif]--></td>
                                </tr>
                            </table></td>
                    </tr>
                </table></td>
        </tr>
    </table>
</div>
</body>
</html>`
        this.mailGonders = 1;   // 1 tr Template tr Mail  // 2 en template en Mail
        this.mailTR = ["test@gmail.com", "test1@gmail.com", "test2@gmail.com"]
        this.enMail = ["test3@gmail.com", "test4@gmail.com", "test5@gmail.com"]
    }
    async mailService(template, mail) {
        let mailss = "test@gmail.com"

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            auth: {
                user: this.email,
                pass: this.password
            }
        });
        let info = transporter.sendMail({
            from: `${this.email}`,
            to: mail,
            subject: this.subject,
            text: this.text,
            html: template,
        }).then((res) => {
            console.log(res.accepted + " " + res.response)
            transporter.close();
        }).catch((error) => {
            console.log(error)
            transporter.close();
        });

    }
    async mailGonder() {
        if (this.mailGonders === 1) {
            this.mailTR.map(async value => {
                await this.mailService(this.trTemplate, value);
            })
        } else if (this.mailGonders === 2) {
            this.enMail.map(async value => {
                await this.mailService(this.enTemplate, value);
            })
        }
    }
}

const system = new MailService()
const main = system.mailGonder();


//1 tr   //2 En


