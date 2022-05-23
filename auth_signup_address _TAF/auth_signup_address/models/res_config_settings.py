from odoo import api, fields, models


class ResConfigSettings(models.TransientModel):
    _inherit = 'res.config.settings'

    auth_signup_with_phone = fields.Boolean(string='Phone', default=True)
    auth_signup_with_address = fields.Boolean(string='Address', default=True)
    auth_signup_with_codepostal = fields.Boolean(string='codepostal', default=True)
    auth_signup_with_date_of_birth = fields.Boolean(string='Date of Birth', default=True)
    auth_signup_with_image = fields.Boolean(string='Image', default=True)

    @api.model
    def get_values(self):
        res = super(ResConfigSettings, self).get_values()
        get_param = self.env['ir.config_parameter'].sudo().get_param
        res.update(
            auth_signup_with_address=get_param('auth_signup_with_address', 'False').lower() == 'true',
           auth_signup_with_codepostal=get_param('auth_signup_with_codepostal', 'False').lower() == 'true',
            auth_signup_with_phone=get_param('auth_signup_with_phone', 'False').lower() == 'true',
            auth_signup_with_date_of_birth=get_param('auth_signup_with_date_of_birth', 'False').lower() == 'true',
            auth_signup_with_image=get_param('auth_signup_with_image', 'False').lower() == 'true',

        )
        return res
    #auth_signup_address.field_res_config_settings__test
    #get code postal of each city
    @api.depends('code_postal')
    def get_auth_signup_with_code_postal(self):
         #print('hhhddddddddd')
         pass
#res.users
    @api.onchange('code_postal')
    def get_auth_signup_with_code_postal(self):
        #print('hhhddddddddd')
        pass

    def set_values(self):
        super(ResConfigSettings, self).set_values()
        set_param = self.env['ir.config_parameter'].sudo().set_param
        set_param('auth_signup_with_phone', repr(self.auth_signup_with_phone))
        set_param('auth_signup_with_address', repr(self.auth_signup_with_address))
        set_param('auth_signup_withcode_postal', repr(self.auth_signup_with_codepostal))
        set_param('auth_signup_with_date_of_birth', repr(self.auth_signup_with_date_of_birth))
        set_param('auth_signup_with_image', repr(self.auth_signup_with_image))
