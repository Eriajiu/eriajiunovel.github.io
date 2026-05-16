import {j as e, s as w, a as A, v as C, b as T, c as E, d as y, T as P} from "./auth.B8TgjdLS.js";
import {r} from "./index.CO9X3OiW.js";
import {B as S, A as d} from "./content.CMgzMHu7.js";
import {u as L} from "./storage.BMeY25jr.js";
function F({children: c}) {
    return e.jsxs("div", {
        className: "auth-shell",
        children: [e.jsxs("div", {
            className: "auth-panel auth-panel--visual",
            children: [e.jsxs("div", {
                className: "auth-visual-badge",
                children: [e.jsx("span", {
                    className: "auth-logo-icon",
                    children: e.jsx("img", {
                        src: S.logoIcon,
                        alt: S.name,
                        style: {
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "999px"
                        },
                        onError: a => {
                            a.currentTarget.style.display = "none"
                        }
                    })
                }), e.jsx("span", {
                    children: S.name
                })]
            }), e.jsx("div", {
                className: "auth-visual-copy",
                children: e.jsx("h1", {
                    children: d.leftTitle
                })
            }), e.jsx("div", {})]
        }), e.jsx("div", {
            className: "auth-panel auth-panel--form",
            children: e.jsxs("div", {
                className: "auth-form-card",
                children: [c, e.jsxs("p", {
                    className: "auth-terms",
                    children: [d.termsText, " ", e.jsx("a", {
                        href: "#",
                        children: d.termsLink
                    })]
                })]
            })
        })]
    })
}
function U({onSuccess: c, onError: a}) {
    const [t,m] = r.useState(!0)
      , [l,i] = r.useState("")
      , [n,o] = r.useState("")
      , [u,s] = r.useState(!1)
      , h = async p => {
        if (p.preventDefault(),
        !l.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l)) {
            a("Vui lòng nhập email hợp lệ.");
            return
        }
        if (!n || n.length < 6) {
            a("Mật khẩu phải có ít nhất 6 ký tự.");
            return
        }
        s(!0);
        try {
            if (t) {
                const {error: f} = await w(l, n);
                if (f) {
                    a("Đăng nhập thất bại. Vui lòng kiểm tra lại email và mật khẩu."),
                    s(!1);
                    return
                }
            } else {
                const {error: f} = await A(l, n);
                if (f) {
                    a("Đăng ký thất bại. " + (f.message || "Vui lòng thử lại.")),
                    s(!1);
                    return
                }
            }
            c(l, t)
        } catch {
            a("Đã có lỗi xảy ra. Vui lòng thử lại.")
        } finally {
            s(!1)
        }
    }
    ;
    return e.jsxs("div", {
        className: "auth-step",
        children: [e.jsxs("div", {
            style: {
                display: "flex",
                gap: "10px",
                marginBottom: "24px"
            },
            children: [e.jsx("button", {
                type: "button",
                onClick: () => m(!0),
                style: {
                    padding: "8px 16px",
                    borderRadius: "99px",
                    border: "none",
                    background: t ? "var(--theme-primary)" : "var(--color-bg-card)",
                    color: t ? "var(--color-bg-card)" : "var(--color-text)",
                    fontWeight: "bold",
                    cursor: "pointer"
                },
                children: "Đăng nhập"
            }), e.jsx("button", {
                type: "button",
                onClick: () => m(!1),
                style: {
                    padding: "8px 16px",
                    borderRadius: "99px",
                    border: "none",
                    background: t ? "var(--color-bg-card)" : "var(--theme-primary)",
                    color: t ? "var(--color-text)" : "var(--color-bg-card)",
                    fontWeight: "bold",
                    cursor: "pointer"
                },
                children: "Đăng ký"
            })]
        }), e.jsx("h2", {
            className: "auth-step-title",
            children: t ? "Chào mừng trở lại!" : "Tạo tài khoản mới"
        }), e.jsx("p", {
            className: "auth-step-subtitle",
            children: t ? "Nhập email và mật khẩu để tiếp tục." : "Đăng ký nhanh bằng email và mật khẩu."
        }), e.jsxs("form", {
            onSubmit: h,
            className: "auth-form",
            children: [e.jsxs("div", {
                className: "auth-form-group",
                children: [e.jsx("label", {
                    htmlFor: "auth-email",
                    className: "auth-form-label",
                    children: "Email"
                }), e.jsx("input", {
                    id: "auth-email",
                    type: "email",
                    value: l,
                    onChange: p => i(p.target.value),
                    placeholder: "hinh.trinh@example.com",
                    disabled: u,
                    className: "auth-input",
                    autoComplete: "email",
                    autoFocus: !0
                })]
            }), e.jsxs("div", {
                className: "auth-form-group",
                children: [e.jsx("label", {
                    htmlFor: "auth-password",
                    className: "auth-form-label",
                    children: "Mật khẩu"
                }), e.jsx("input", {
                    id: "auth-password",
                    type: "password",
                    value: n,
                    onChange: p => o(p.target.value),
                    placeholder: "••••••••",
                    disabled: u,
                    className: "auth-input"
                })]
            }), e.jsx("button", {
                type: "submit",
                disabled: u,
                className: "auth-button auth-button--primary",
                style: {
                    marginTop: "10px"
                },
                children: u ? "Đang xử lý..." : t ? "Đăng nhập" : "Đăng ký"
            })]
        })]
    })
}
function R({email: c, onSuccess: a, onError: t, onBack: m}) {
    const [l,i] = r.useState("")
      , [n,o] = r.useState(!1)
      , u = r.useRef(null)
      , s = async h => {
        if (h.preventDefault(),
        !l.trim() || l.length < 6) {
            t("Vui lòng nhập mã OTP hợp lệ.");
            return
        }
        o(!0);
        try {
            const {error: p, user: f} = await C(c, l);
            if (p || !f) {
                t(p?.message || "Mã xác thực không chính xác hoặc đã hết hạn."),
                o(!1);
                return
            }
            a()
        } catch {
            t("Đã có lỗi xảy ra. Vui lòng thử lại.")
        } finally {
            o(!1)
        }
    }
    ;
    return e.jsxs("div", {
        className: "auth-step",
        children: [e.jsx("h2", {
            className: "auth-step-title",
            children: d.step2Title
        }), e.jsx("p", {
            className: "auth-step-subtitle",
            children: d.step2Subtitle(c)
        }), e.jsxs("form", {
            onSubmit: s,
            className: "auth-form",
            children: [e.jsxs("div", {
                className: "auth-form-group",
                children: [e.jsx("label", {
                    htmlFor: "auth-otp",
                    className: "auth-form-label",
                    children: "Mã OTP"
                }), e.jsx("input", {
                    ref: u,
                    id: "auth-otp",
                    type: "text",
                    value: l,
                    onChange: h => i(h.target.value.replace(/\D/g, "").slice(0, 8)),
                    placeholder: d.step2OtpPlaceholder,
                    disabled: n,
                    className: "auth-input auth-input--otp",
                    autoComplete: "one-time-code",
                    autoFocus: !0
                })]
            }), e.jsx("button", {
                type: "submit",
                disabled: n || l.length < 6,
                className: "auth-button auth-button--primary",
                children: n ? "Đang xác thực..." : d.step2Submit
            }), e.jsx("div", {
                className: "auth-back-link",
                children: e.jsx("button", {
                    type: "button",
                    onClick: m,
                    className: "auth-back-button",
                    disabled: n,
                    children: "← Quay lại"
                })
            })]
        })]
    })
}
function O({email: c, onSuccess: a, onError: t}) {
    const [m,l] = r.useState("")
      , [i,n] = r.useState(null)
      , [o,u] = r.useState(!1)
      , [s,h] = r.useState(!1)
      , p = r.useMemo( () => c.split("@")[0]?.trim() ?? "", [c])
      , f = async v => {
        const b = v.target.files?.[0];
        if (!b) {
            n(null);
            return
        }
        try {
            u(!0);
            const {data: {session: g}} = await T.auth.getSession();
            if (!g?.user)
                throw new Error("Không tìm thấy phiên đăng nhập.");
            const {publicUrl: j} = await L(b, g.user.id);
            n(j)
        } catch (g) {
            const j = g instanceof Error ? g.message : "Lỗi khi tải ảnh lên.";
            t(j),
            n(null)
        } finally {
            u(!1)
        }
    }
      , N = async v => {
        v.preventDefault();
        const b = m.trim() || p;
        if (!b || b.length < 2) {
            t("Tên hiển thị cần có ít nhất 2 ký tự.");
            return
        }
        h(!0);
        try {
            const g = i ?? void 0
              , {profile: j, error: x} = await E(b, g);
            if (x || !j) {
                t(x?.message || "Không thể lưu hồ sơ của bạn."),
                h(!1);
                return
            }
            a()
        } catch {
            t("Đã có lỗi xảy ra khi tạo hồ sơ.")
        } finally {
            h(!1)
        }
    }
    ;
    return e.jsxs("div", {
        className: "auth-step",
        children: [e.jsx("h2", {
            className: "auth-step-title",
            children: d.step3Title
        }), e.jsx("p", {
            className: "auth-step-subtitle",
            children: d.step3Subtitle
        }), e.jsxs("form", {
            onSubmit: N,
            className: "auth-form",
            children: [e.jsxs("div", {
                className: "auth-form-group",
                children: [e.jsx("span", {
                    className: "auth-form-label",
                    children: d.step3AvatarLabel
                }), e.jsxs("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                        alignItems: "flex-start"
                    },
                    children: [i && e.jsx("img", {
                        src: i,
                        alt: "Avatar Preview",
                        style: {
                            width: "80px",
                            height: "80px",
                            borderRadius: "50%",
                            objectFit: "cover"
                        }
                    }), e.jsx("input", {
                        type: "file",
                        accept: "image/*",
                        onChange: f,
                        disabled: o,
                        className: "auth-input",
                        style: {
                            maxWidth: "200px"
                        }
                    }), o && e.jsx("span", {
                        style: {
                            fontSize: "0.8rem",
                            color: "var(--color-text-muted)"
                        },
                        children: "Đang tải ảnh lên..."
                    }), e.jsx("span", {
                        style: {
                            fontSize: "0.8rem",
                            color: "var(--color-text-muted)"
                        },
                        children: "Ảnh đại diện (không bắt buộc). Tối đa 5MB."
                    })]
                })]
            }), e.jsxs("div", {
                className: "auth-form-group",
                children: [e.jsx("label", {
                    htmlFor: "auth-username",
                    className: "auth-form-label",
                    children: d.step3UsernameLabel
                }), e.jsx("input", {
                    id: "auth-username",
                    type: "text",
                    value: m,
                    onChange: v => l(v.target.value),
                    placeholder: d.step3UsernamePlaceholder,
                    disabled: s,
                    className: "auth-input",
                    autoComplete: "nickname"
                })]
            }), e.jsx("button", {
                type: "submit",
                disabled: s || o,
                className: "auth-button auth-button--primary",
                children: s ? "Đang hoàn tất..." : d.step3Submit
            })]
        })]
    })
}
function V() {
    const [c,a] = r.useState("email")
      , [t,m] = r.useState("")
      , [l,i] = r.useState(null)
      , [n,o] = r.useState(!0)
      , [u,s] = r.useState(!1);
    r.useEffect( () => {
        h()
    }
    , []);
    const h = async () => {
        try {
            await y() ? s(!0) : o(!1)
        } catch {
            o(!1)
        }
    }
    ;
    return {
        currentStep: c,
        authEmail: t,
        authError: l,
        isLoading: n,
        isComplete: u,
        handleAuthSuccess: async (x, k) => {
            m(x),
            k ? await y() ? s(!0) : a("profile") : a("otp"),
            i(null)
        }
        ,
        handleVerifyOtpSuccess: () => {
            a("profile"),
            i(null)
        }
        ,
        handleSaveProfileSuccess: async () => {
            const x = await y();
            s(x),
            a("profile")
        }
        ,
        handleBackToEmail: () => {
            a("email"),
            i(null)
        }
        ,
        handleError: x => {
            i(x)
        }
        ,
        handleClearError: () => {
            i(null)
        }
        ,
        handleReset: () => {
            a("email"),
            m(""),
            i(null),
            s(!1)
        }
    }
}
function B() {
    const {currentStep: c, authEmail: a, authError: t, isLoading: m, isComplete: l, handleAuthSuccess: i, handleVerifyOtpSuccess: n, handleSaveProfileSuccess: o, handleBackToEmail: u, handleError: s, handleClearError: h} = V();
    return l ? (typeof window < "u" && (window.location.href = "/vuongtai/home"),
    e.jsx("div", {
        className: "auth-loading-state",
        children: e.jsxs("div", {
            className: "auth-loading-card",
            children: [e.jsx("div", {
                className: "auth-spinner"
            }), e.jsx("p", {
                children: "Đang chuyển bạn vào trang chủ..."
            })]
        })
    })) : m ? e.jsx("div", {
        className: "auth-loading-state",
        children: e.jsxs("div", {
            className: "auth-loading-card",
            children: [e.jsx("div", {
                className: "auth-spinner"
            }), e.jsx("p", {
                children: "Đang kiểm tra phiên đăng nhập..."
            })]
        })
    }) : e.jsxs(F, {
        children: [t && e.jsxs("div", {
            className: "auth-alert auth-alert--error",
            role: "alert",
            children: [e.jsx("span", {
                children: t
            }), e.jsx("button", {
                type: "button",
                onClick: h,
                className: "auth-alert-close",
                children: "Đóng"
            })]
        }), c === "email" && e.jsx(U, {
            onSuccess: i,
            onError: s
        }), c === "otp" && e.jsx(R, {
            email: a,
            onSuccess: n,
            onError: s,
            onBack: u
        }), c === "profile" && e.jsx(O, {
            email: a,
            onSuccess: o,
            onError: s
        })]
    })
}
function H() {
    return e.jsx(P, {
        children: e.jsx(B, {})
    })
}
export {H as default};
