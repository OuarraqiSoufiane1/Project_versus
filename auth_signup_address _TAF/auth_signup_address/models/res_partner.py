from odoo import fields, models


class ResPartner(models.Model):
    _inherit = 'res.partner'

    date_of_birth = fields.Date(string='Date of Birth')
    auth_signup_with_codepostal = fields.Boolean(string='codepostal', default=True)
