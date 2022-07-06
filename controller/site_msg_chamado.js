var express = require('express');
var router = express.Router();

const yup = require('yup');

const { eAdmin } = require('../middlewares/auth');

const MsgChamado = require('../models/MsgChamado');

router.get('/chamados/:page', async (req, res) => {
    const { page = 1 } = req.params;
    const limit = 40;
    var lastPage = 1;

    const countMsgChamado = await MsgChamado.count();
    if (countMsgContact === null) {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Nenhuma mensagem de contato encontrada!"
        });
    } else {
        lastPage = Math.ceil(countMsgChamado / limit);
    }

    await MsgChamado.findAll({
        // attributes: ['id', 'name', 'email', 'subject'],
        order: [['id', 'DESC']],
        offset: Number((page * limit) - limit),
        limit: limit
    })
        .then((msgChamado) => {
            return res.json({
                erro: false,
                msgChamado,
                countMsgChamado,
                lastPage
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Nenhuma mensagem de contato encontrada!"
            });
        });
});

router.get("/chamados/:id", eAdmin, async (req, res) => {
    const { id } = req.params;

    await MsgChamado.findByPk(id)
        .then((msgChamado) => {
            return res.json({
                erro: false,
                msgChamado
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Nenhuma mensagem de contato encontrada!"
            });
        });
});

router.post('/chamados', async (req, res) => {

    const schema = yup.object().shape({
        nome: yup.string("Erro: Necessário preencher o campo nome!")
            .required("Erro: Necessário preencher o campo nome!"),
        whatsapp: yup.string("Erro: Necessário preencher o campo whatsapp!")
            .required("Erro: Necessário preencher o campo whatsapp!"),
        endereco: yup.string("Erro: Necessário preencher o campo endereco!")
            .required("Erro: Necessário preencher o campo endereco!"),
        email: yup.string("Erro: Necessário preencher o campo email!")
            .required("Erro: Necessário preencher o campo email!"),

        equipamento: yup.string("Erro: Necessário preencher o campo equipamento!")
            .required("Erro: Necessário preencher o campo equipamento!")



    });

    try {
        await schema.validate(req.body);
    } catch (err) {
        return res.status(400).json({
            erro: true,
            mensagem: err.errors
        })
    }

    await MsgChamado.create(req.body)
        .then((msgChamado) => {
            return res.json({
                id: msgContact.id,
                erro: false,
                mensagem: "Chamado enviado com sucesso!"
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Chamado não enviado!"
            });
        });
});

router.put("/chamado", eAdmin, async (req, res) => {
    const { id } = req.body;

    const schema = yup.object().shape({
        nome: yup.string("Erro: Necessário preencher o campo nome!")
            .required("Erro: Necessário preencher o campo nome!"),
        whatsapp: yup.string("Erro: Necessário preencher o campo whatsapp!")
            .required("Erro: Necessário preencher o campo whatsapp!"),
        email: yup.string("Erro: Necessário preencher o campo email!")
            .required("Erro: Necessário preencher o campo email!"),
        endereco: yup.string("Erro: Necessário preencher o campo endereco!")
            .required("Erro: Necessário preencher o campo endereco!")
            .email("Erro: Necessário preencher o campo com e-mail válido!"),
        equipamento: yup.string("Erro: Necessário preencher o campo equipamento!")
            .required("Erro: Necessário preencher o campo equipamento!"),
        marca: yup.string("Erro: Necessário preencher o campo marca!")
            .required("Erro: Necessário preencher o campo marca!"),
        modelo: yup.string("Erro: Necessário preencher o campo modelo!")
            .required("Erro: Necessário preencher o campo modelo!"),
        defeito: yup.string("Erro: Necessário preencher o campo defeito!")
            .required("Erro: Necessário preencher o campo defeito!")
    });

    try {
        await schema.validate(req.body);
    } catch (err) {
        return res.status(400).json({
            erro: true,
            mensagem: err.errors
        });
    }

    await MsgChamado.update(req.body, { where: { id } })
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Chamado editado com sucesso!"
            });

        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Chamado não editado com sucesso!"
            });
        });
});

router.delete("/chamado/:id", eAdmin, async (req, res) => {
    const { id } = req.params;

    await MsgChamado.destroy({ where: { id } })
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Chamado apagado com sucesso!"
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Chamado não apagado com sucesso!"
            });
        });
});

module.exports = router;